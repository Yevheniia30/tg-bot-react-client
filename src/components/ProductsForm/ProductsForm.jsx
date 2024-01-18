import { useEffect } from "react";
import { useForm } from "react-hook-form";
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
  } = useForm();
  const { tg } = useTelegram();

  console.log("tg", tg);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Відправити дані",
    });
  }, [tg]);

  useEffect(() => {
    if (!Object.keys(errors).length) {
      console.log("пуст");
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [errors, tg]);

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
