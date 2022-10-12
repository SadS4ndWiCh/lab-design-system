import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps {
	children?: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	asChild?: boolean;
}

export function Button({ children, asChild, size = 'md' }: ButtonProps) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			className={clsx('w-full px-4 py-3 rounded bg-cyan-500 text-black font-semibold font-sans transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', {
				'text-xs': size === 'sm',
				'text-sm': size === 'md',
				'text-md': size === 'lg',
			})}
		>
			{ children }
		</Comp>
	)
}