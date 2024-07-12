import { IconType } from 'react-icons';

interface Props {
	icon: IconType;
	className?: string;
	size?: number | string;
	[key: string]: any; // Para permitir props adicionales
}

export const Icon = ({
	icon: IconComponent,
	className,
	size,
	...props
}: Props) => {
	return (
		<IconComponent className={className} size={size} {...props} />
	);
};
