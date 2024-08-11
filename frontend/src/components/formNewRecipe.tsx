import React from "react";
import { useForm } from "react-hook-form";
import { apiUrl } from "../App";
import { useQueryClient } from "@tanstack/react-query";

type Recipe = {
  name: string;
  ingredients: string;
  instructions: string;
  servings: number;
};

function FormNewRecipe({
  modalVisibility,
  setModalVisibility,
}: {
  modalVisibility: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Recipe>();

  const queryClient = useQueryClient();

  const submitForm = async (formData: Recipe) => {
    console.log(formData);
    try {
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      queryClient.invalidateQueries({ queryKey: ["repoRecipes"] });
      setModalVisibility(!modalVisibility);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="flex flex-col max-w-[600px] mx-auto">
      <h2>New recipe</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Basic details">
          <Field label="Name" error={errors.name?.message}>
            <input
              {...register("name", { required: "This field is required" })}
              type="text"
              name="name"
              id="name"
              className={`p-2.5 w-full border rounded-[6px] ${
                errors.name ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="Ingredients" error={errors.ingredients?.message}>
            <textarea
              {...register("ingredients", {
                required: "This field is required",
              })}
              name="ingredients"
              id="ingredients"
              rows={3}
              className={`p-2.5 w-full border rounded-[6px] ${
                errors.name ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="Instructions" error={errors.instructions?.message}>
            <textarea
              {...register("instructions", {
                required: "This field is required",
              })}
              name="instructions"
              id="instructions"
              rows={6}
              className={`p-2.5 w-full border rounded-[6px] ${
                errors.name ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="Servings" error={errors.servings?.message}>
            <input
              {...register("servings", {
                required: "This field is required",
                valueAsNumber: true,
              })}
              type="number"
              name="servings"
              id="servings"
              className={`p-2.5 w-full border rounded-[6px] ${
                errors.name ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
        </FieldSet>

        <Field>
          <button className="text-sm cursor-pointer py-[0.6em] px-[1.2em] border border-[#d9d9d9] rounded-[6px] mr-auto bg-blue-500 text-white">
            Add to your recipe book
          </button>
        </Field>
      </form>
    </section>
  );
}

export default FormNewRecipe;

interface FieldSetProps {
  label?: string;
  children: React.ReactNode;
}
export const FieldSet = ({ label, children }: FieldSetProps) => {
  return (
    <fieldset className="my-4 border-none">
      {label && <legend className="text-base font-bold mb-2.5">{label}</legend>}
      <div className="flex flex-col justify-between self-start">{children}</div>
    </fieldset>
  );
};

interface FieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
}

export const Field = ({ label, htmlFor, error, children }: FieldProps) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className="form-field">
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {error && (
        <div role={"alert"} className="text-red-600 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

function getChildId(children: React.ReactNode): string | undefined {
  const child = React.Children.only(children);

  if (React.isValidElement(child) && "id" in child.props) {
    return child.props.id;
  }

  return undefined;
}
