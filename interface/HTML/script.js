function toggleModal(tipo) {
    const modal = document.getElementById('modal-container');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-description');
    const icon = document.getElementById('modal-icon');

    if (tipo === 'saldo') {
        title.innerText = "Atualizar Saldo do Dia";
        desc.innerText = "Digite o valor atual disponível na sua conta do dia.";
        icon.setAttribute('data-lucide', 'wallet');
        modal.classList.remove('hidden');
        modal.classList.add('flex');

    } else if (tipo === 'invest') {
        title.innerText = "Atualizar Investimentos";
        desc.innerText = "Digite o valor total que você tem investido no banco.";
        icon.setAttribute('data-lucide', 'trending-up');
        modal.classList.remove('hidden');
        modal.classList.add('flex');

    } else {
        // Se não passar tipo, ele fecha
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    
    // Recarrega os ícones se estiver a usar Lucide
    if(window.lucide) lucide.createIcons();
}

function salvarValor() {
    const valor = document.getElementById('valor-input').value;
    alert("Valor atualizado para: R$ " + valor);
    toggleModal(); // Fecha após salvar
}

function openModalDespesa() {
    const modal = document.getElementById('modal-despesa');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModalDespesa() {
    const modal = document.getElementById('modal-despesa');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('form-despesa').reset();
}

// Fechar ao clicar fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('modal-despesa');
    if (event.target == modal) {
        closeModalDespesa();
    }
}