import { getTechnologies } from '@/actions/technologies/get-technologies';
import { useQuery } from '@tanstack/react-query';

export const useTechnologies = () => {
	const { data: technologies, isLoading } = useQuery({
		queryKey: ['technologies'],
		queryFn: async () => await getTechnologies(),
	});

	return {
		technologies,
		isLoading,
	};
};
