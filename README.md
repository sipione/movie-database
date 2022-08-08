# I like the movie movie!

### Considerações
Como melhoramentos penso em na página de detalhes fazer abstração para um contexto específico para diminuir o número de funçõs no mesmo arquivo, espalhar mais as responsabilidades de algyum itens em outras páginas também, como a paginação da página home. Quanto aos gráficos acabei fazendo com react-google-charts por me sentir mais confortável, devido ao curto tempo os gráficos na d3 estavam ainda muito simples e pouco interativos, motivo pelo qual optei pela alteração e continuarei aperfeiçoando as habilidade no d3 para colocar na lib solicitada.

### overview
Busquei alinhar tanto o visual quanto as tecnicas de programação do website, buscando eficiência, desempenho, responsividade, e melhorar ao máximo o user experience. A construção seguiu por mobile first, ou seja a responsividade vai do mobile para o desktop. >Além disso busquei abstrair os componentes o máximo possível para manter uma responsabilidade única ou menor possível (ainda seja possível morar muitos pontos nessa parte).

### Estrutura de arquivos
Na pasta src pode contar com ASSETS para oos arquivos estáticos, PAGES para as páginas, COMPONENTS para os componentes abstraídos, a pasta COMMON possui arquivos em comum para a aplicação. 
Em assets há apenas imagens *não* otimizadas para web e svg.
Na pasta pages é possível verificar as páginas que existem nos projetos com seus respectivos inde.js para o component react e style.js para os components de estilo.
Na pasta COMPONENTS é possível encontrar outras pastas de components como filtro, cabeçalho, etc; cada uma das pastas contém seus respectivos index e style assim como nas páginas.
nNa pasta COMMON estão outras pastas com elrmentos communs à aplicação, como contextos, hooks, e a pasta foundation com elementos de fundação da app como estylos globais variáveis de diversos campos e a tipografia.   
