import { defineField, defineType } from "sanity";

export const musicsType = defineType({
name: 'music',        // O NOME que o banco de dados vai usar (Obrigatório)
  type: 'document',    // O TIPO do objeto (Obrigatório: document, object, etc)
  title: 'Musics',
  fields: [
    defineField({
      name: 'name',      
      type: 'string',     
      title: 'music name', 
    }),
    defineField({
      name: 'spotify',
      type: 'string',
      title: 'spotify link',
    }),
    defineField({
      name: 'youtube',
      type: 'string',
      title: 'youtube link',
    }),
    defineField({
      name: 'appleMusic',
      type: 'string',
      title: 'apple music link',
    }),
    defineField({
      name: 'musicCover',
      type: 'image',
      title: 'image cover',
    }),
  ],
})