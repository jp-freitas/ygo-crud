import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button({ ...props }: ButtonProps) {
  return (
		<button
      className="rounded px-4 py-3 text-sm font-semibold outline-none shadow-sm capitalize bg-slate-400"
      {...props}
    />
  )
}