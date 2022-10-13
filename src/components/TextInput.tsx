import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
 
export interface TextInputRootProps {
	children: ReactNode;
	className?: string;
}

const TextInputRoot = ({ children, className }: TextInputRootProps) => {
	return (
		<div
			className={
				clsx(
					"flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-500",
					className
				)
			}
		>
			{ children }
		</div>
	)
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {
	return (
		<input
			type="text"
			className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
			{ ...props }
		/>
	)
}

TextInputInput.displayName = 'TextInput.Input';

export interface TextInputIconProps {
	children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
	return (
		<Slot className='w-6 h-6 text-gray-400'>
			{ children }
		</Slot>
	)
}

TextInputIcon.displayName = 'TextInput.Icon';

export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputInput,
	Icon: TextInputIcon,
}