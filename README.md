# Layl

See the "app" in action at https://layl.app or get it as a TWA from the [Google Play Store](https://play.google.com/store/apps/details?id=com.navedislam.layl). NOTE (4 April 2023): Layl is currently not available on Google Play, coming back soon inshaAllah.

May Allah reward brother @Mhdtarek for upgrading Layl to Vite and a modern stack. Earlier, it was a re-write in Svelte of https://github.com/mr-islam/layl (which was written by a total JS/React beginner).

Lots of credit to Batoul Apps for their awesome project [Adhan](https://github.com/batoulapps/adhan-js), which Layl happily relies upon.

## License

AGPL v3 for the codebase, but all rights reserved for the images and art. 

## Localization

Layl would love to support more languages. If you know a language and would like to help translate Layl to it, please let me know and I'll help you get started inshaAllah! Layl only has a little bit of text :D

For developers, you can clone this repo and I recommend using VS Code with [this extension](https://github.com/antfu/i18n-ally). Layl uses svelte-i18n.

Otherwise, please see the folder `src/locales` for original language files. Layl just uses 50 lines of text, so translating is super easy. Please do translate based on the original English text.

Languages currently available:

- Arabic
- English
- Swedish


## Development

Layl uses GitHub issues and projects to encourage community collaboration. 
 
Please get in touch if some code is unclear, or if you would like to contribute so we can discuss ideas :).

Development scripts are in `package.json`. Please note that the geocoding API only works from the production URL, so during development you will see coordinates.