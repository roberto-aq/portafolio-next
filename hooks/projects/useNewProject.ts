import { createNewProject } from '@/actions/projects/new-project';
import { toast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useNewProject = () => {
	const router = useRouter();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['new-project'],
		mutationFn: createNewProject,
		onError: error => {
			toast({
				title: 'Algo salió mal',
				description: error.message,
				variant: 'destructive',
			});
		},
		onSuccess: () => {
			router.push('/dashboard/projects');

			queryClient.invalidateQueries({ queryKey: ['projects'] });

			toast({
				title: 'Éxito',
				description: 'El proyecto se ha creado correctamente',
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};
