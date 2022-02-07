// Buscar os links salvos

export async function getLinksSaved(key) {
  const myLinks = await localStorage.getItem(key)
  // getItem para buscar algo 

  let linksSaved = JSON.parse(myLinks) || [];

  // Caso o JSON.parse(mylinks) volte null, undefined ou algo que eu não quero. Quero que inicie então como um array vazio.
  return linksSaved;
}


// Salvar um link no localStorage do navegador.

export async function saveLink (key, newLink) {
  let linkStored = await getLinksSaved(key)

  // Não deixar salvar como duplicatas links com mesmo ID.
  const hasLink = linkStored.some( link => link.id === newLink.id)

  if(hasLink) {
    console.log('ESSE LINK JÁ EXISTE NA SUA LISTA')
    return 
  }

  // Adicionar o link a nossa array 

  linkStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linkStored))
  console.log('salvou essa porra.')
  // setItem para adicionar algo novo ao storage 
}

// Deletar um link do nosso localStorage

export function deleteLink(links, id) {
  let myLinks = links.filter( item => {
    return(item.id !== id)
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

  return myLinks;
}