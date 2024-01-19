import { useEffect, useCallback } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTelegram } from "./../../hooks/useTelegram";

// import Button from "./../Button/Button";
import {
  FormStyled,
  ErrorStyled,
  InputStyled,
  InputBoxStyled,
} from "./ProductsForm.styled";

const ProductsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const { tg } = useTelegram();
  const isName = useWatch({ name: "name", control });
  const isEmail = useWatch({ name: "email", control });

  console.log("isName", isName);
  console.log("isEmail", isEmail);

  const cb = useCallback(() => {
    tg.sendData({ isName, isEmail });
  }, [isEmail, isName, tg]);

  useEffect(() => {
    tg.WebApp.onEvent("mainButtonClicked", cb);
    return () => {
      tg.WebApp.offEvent("mainButtonClicked", cb);
    };
  }, [cb, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Відправити дані",
    });
  }, [tg]);

  useEffect(() => {
    if (!isName || !isEmail) {
      console.log("пустo");
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [isEmail, isName, tg]);

  const onSubmit = (data) => console.log(data);

  console.log("errors", errors);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputBoxStyled>
        <InputStyled
          {...register("name", {
            required: true,
            minLength: 3,
            // pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Ім'я"
        />
        {errors.name && <ErrorStyled>This field is required</ErrorStyled>}
      </InputBoxStyled>

      <InputBoxStyled>
        <InputStyled
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <ErrorStyled>This field is required</ErrorStyled>}
      </InputBoxStyled>
      {/* <Button type="submit" $variant="submit">
        Відправити
      </Button> */}
    </FormStyled>
  );
};

export default ProductsForm;
