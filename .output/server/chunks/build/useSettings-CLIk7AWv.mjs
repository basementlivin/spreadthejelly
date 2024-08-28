import { b as usePrismic, e as useAsyncData } from './server.mjs';

const useSettings = () => {
  const prismic = usePrismic();
  return useAsyncData("$settings", () => prismic.client.getSingle("settings")).data;
};

export { useSettings as u };
//# sourceMappingURL=useSettings-CLIk7AWv.mjs.map
