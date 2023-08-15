// *https://www.youtube.com/watch?v=L1osqF17iDM
// *por padrao os components do next sao renderizados do lado servidor
// *qd usamos a diretiva use client ele esta sendo hidratado com js, e usado qd precisa ter alguma interatividade ou usar algum hook
// *podemos ter server components dentro de clients components, e o server comp deve ser passado como children para client component, ex: o DialogProvider e um client component e dentro deles temos o GithubUser q eh um server component
// * no next13 temos a opcao de definir para cada requisicao qt tempo q ela deve ficar cacheada.

import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser";
import { DialogProvider } from "./contexts/DialogContext";

export default async function Home() {
  return (
    <DialogProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="diego3g" />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="maykbrito" />
      </Suspense>
    </DialogProvider>
  );
}
