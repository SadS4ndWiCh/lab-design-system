import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Create account',
		size: 'md',
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio',
			}
		},
		asChild: {
			table: {
				disable: true,
			}
		}
	}
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'sm'
	}
};

export const Large: StoryObj<ButtonProps> = {
	args: {
		size: 'lg'
	}
};

export const CustomComponent: StoryObj<ButtonProps> = {
	args: {
		asChild: true,
		children: (
			<a href="#">Go to home</a>
		)
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			}
		}
	}
}