import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button({ ...props }: ButtonProps) {
  return (
		<button
      className="rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm capitalize bg-slate-50"
      {...props}
    />
  )
}