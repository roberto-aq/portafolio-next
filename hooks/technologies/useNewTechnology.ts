import { createTechnology } from '@/actions/technologies/new-technology';
import { toast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useNewTechnology = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['new-technology'],
		mutationFn: createTechnology,
		onError: error => {
			toast({
				title: 'Algo salió mal',
				description: error.message,
				variant: 'destructive',
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['technologies'] });

			toast({
				title: 'Éxito',
				description: 'La tecnología se ha creado correctamente',
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};
