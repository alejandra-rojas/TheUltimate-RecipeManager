import React from "react";

function FormNewRecipe() {
  return (
    <section className="flex flex-col max-w-[600px] mx-auto">
      <h2>New recipe</h2>
      <form>
        <FieldSet label="Basic details">
          <Field label="Name">
            <input
              type="text"
              name="name"
              id="name"
              className="p-2.5 w-full border border-[#d9d9d9] rounded-[6px]"
            />
          </Field>
          <Field label="Description">
            <textarea
              name="description"
              id="description"
              rows={10}
              className="py-1 px-[11px] w-full border border-[#d9d9d9] rounded-[6px]"
            />
          </Field>
          <Field label="Servings">
            <input
              type="number"
              name="amount"
              id="amount"
              className="p-2.5 w-full border border-[#d9d9d9] rounded-[6px]"
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
        <div role={"alert"} className="error">
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
