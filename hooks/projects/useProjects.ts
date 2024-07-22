import { getProjects } from '@/actions/projects/get-projects';
import { useQuery } from '@tanstack/react-query';

export const useProjects = () => {
	const { data: projects, isLoading: isLoadingProjects } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	return {
		projects,
		isLoadingProjects,
	};
};
