/* eslint-disable no-var */
declare global {
	namespace App {
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
	}

	var __prisma: import('@prisma/client').PrismaClient;

	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			username: string;
			name: string;
		};
	}
}

export {};
