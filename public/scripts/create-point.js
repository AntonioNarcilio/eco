
// ITENS DE COLETA

// Pegando todos os "li's"
const itemsToCollect = document.querySelectorAll(".items-grid li")


for (const item of itemsToCollect) {
	// Evento de clique
	// handelSelectedItem => função
	item.addEventListener("click", handleSelectedItem)
}


const collectedItems = 	document.querySelector("input[name=items]")

//  let => os valores da variável poder ser subscritos
let selectedItems = []

// Função de clique
function handleSelectedItem(event) {

	const itemLi = event.target

	// adicionar ou remover uma classe com js
	itemLi.classList.toggle("selected")

	// apenas adicionar uma classe
	// itemLi.classList.add("selected")

	// apenas remover uma classe
	// itemLi.classList.remove("selected")


	// Pegando o 'id' definido no 'li' - data-id
	const itemId = itemLi.dataset.id
		console.log('Item Id:', itemId)

	//  Verificar se existem items selecionados, se sim
	// pegar os itens selecionados
	const alreadySelected = selectedItems.findIndex(item => {
		const itemFound = item == itemId
		return itemFound
	})

		// Se já estiver selecionado, tirar da seleção
		if (alreadySelected >= 0) {
			// tirar da seleção
			const filteredItems = selectedItems.filter( item => {
				const itemIsDifferent = item != itemId //false
				return itemIsDifferent
			})

			selectedItems = filteredItems
		}
		// Se não estiver selecionado, adicionar à seleção 
		else {
			selectedItems.push(itemId)
		}

		console.log('selectedItems:', selectedItems)

	// Atualizar o campo escondido com os itens selecionados
	collectedItems.value = selectedItems
}
