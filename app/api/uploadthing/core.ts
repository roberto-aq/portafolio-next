import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod';
import sharp from 'sharp';

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: '4MB' } })
		.input(z.object({ configId: z.string().optional() }))
		.middleware(async ({ input }) => {
			return { input };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			const { configId } = metadata.input;

			const res = await fetch(file.url);
			const buffer = await res.arrayBuffer();

			const imgMetadata = await sharp(buffer).metadata();

			return {
				imageUrl: file.url,
			};
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
