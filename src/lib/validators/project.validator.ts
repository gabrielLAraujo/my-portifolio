import { z } from 'zod';

/**
 * Project validation schema
 */
export const projectSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório'),
  title: z.string().min(1, 'Título é obrigatório').max(200, 'Título muito longo'),
  description: z.string().min(10, 'Descrição muito curta').max(1000, 'Descrição muito longa'),
  longDescription: z.string().max(3000, 'Descrição longa muito extensa').optional(),
  technologies: z.array(
    z.union([
      z.string(),
      z.object({
        name: z.string(),
        category: z.enum(['frontend', 'backend', 'devops', 'testing', 'other']).optional(),
        icon: z.string().optional(),
      }),
    ])
  ),
  links: z.object({
    github: z.string().url('URL do GitHub inválida').optional(),
    live: z.string().url('URL do live inválida').optional(),
    documentation: z.string().url('URL da documentação inválida').optional(),
    demo: z.string().url('URL do demo inválida').optional(),
  }),
  metadata: z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      stars: z.number().int().nonnegative().optional(),
      forks: z.number().int().nonnegative().optional(),
      views: z.number().int().nonnegative().optional(),
    })
    .optional(),
  featured: z.boolean(),
  status: z.enum(['active', 'archived', 'in-progress', 'completed']).optional(),
  imageUrl: z.string().url('URL da imagem inválida').optional(),
  githubUrl: z.string().url('URL do GitHub inválida').optional(),
  liveUrl: z.string().url('URL do live inválida').optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;

/**
 * Validate project data
 */
export function validateProject(data: unknown) {
  return projectSchema.safeParse(data);
}

/**
 * Validate array of projects
 */
export function validateProjects(data: unknown) {
  return z.array(projectSchema).safeParse(data);
}
