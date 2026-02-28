import { defineField, defineType } from "sanity";

export const showsType = defineType({
name: 'show',        // O NOME que o banco de dados vai usar (Obrigatório)
  type: 'document',    // O TIPO do objeto (Obrigatório: document, object, etc)
  title: 'Shows',
  fields: [
    defineField({
      name: 'local',      
      type: 'string',     
      title: 'show location ', 
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Show Date',
    }),
    defineField({
      name: 'buyLink',
      type: 'string',
      title: 'ticket purchase ticket',
    }),
  ],
})