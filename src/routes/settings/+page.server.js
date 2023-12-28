/** @type {import('./$types').PageServerLoad} */
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
import { fail } from "@sveltejs/kit";

export async function load() {
    const form = await superValidate(formSchema);
    return {
        form
    };
};

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, formSchema);
        if (!form.valid) {
            return fail(400, {
                form
            });
        }
        return {
            form
        };
    }
};