import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export function Input({ ...props }: InputProps) {
  return (
		<input 
            className="rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm capitalize bg-slate-50" 
            {...props}
        />
  )
}