//Info personal
const name = document.querySelector("#Name");
const lastName = document.querySelector("#LastName");
const phone = document.querySelector("#Phone");

//button
const calcular = document.querySelector("#Calcular");

//Box result
const pay = document.querySelector("#Pay");
const description = document.querySelector("#Description");

//Info product
const selectCombo = document.querySelector("#Combos");
const adicionais = document.getElementsByClassName("checkItem");
const envio = document.getElementsByClassName("radioItem");


function ComboPay() 
{	
	const opcaoCombo = selectCombo.options[selectCombo.selectedIndex].value;

	let valorCombo;

	if (opcaoCombo == 'xsalad') 
	{
		valorCombo = 12.90;
	}
	else if (opcaoCombo == 'xdouble')
	{
		valorCombo = 14.90;
	}
	else if (opcaoCombo == 'xtudo')
	{
		valorCombo = 19.90;
	}

	console.log("COMBO:", valorCombo);

	return valorCombo
}

function ComboDescription() 
{
	const opcaoComboDesc = selectCombo.options[selectCombo.selectedIndex].text;

	return opcaoComboDesc;
}


function AdicionalPay() 
{
	let valorAdicional = 2;
	let qtd = 0;

	if (adicionais[0].checked)
	{
		qtd = 1;
	}
	if (adicionais[1].checked)
	{
		qtd+=1;
	}
	if (adicionais[2].checked)
	{
		qtd+=1;
	}
	
	console.log("Quantidade", qtd);
	console.log("Valor", valorAdicional);

	return valorAdicional * qtd;
}

function AdicionalDescription()
{
	let AdicionaisDesc = "";

	for (let i = 0; i < adicionais.length; i++) 
	{
		if (adicionais[i].checked == true) 
		{
			AdicionaisDesc += adicionais[i].value;
		}	
	}

	return AdicionaisDesc
}



function EnvioPay () 
{
	let valorEnvio;

	if (envio[0].checked)
	{
		valorEnvio = 9.9;
	}
	else
	{
		valorEnvio = 0;
	}

	return valorEnvio;
}

function EnvioDescription() 
{
	let envioDesc = "";

	if (envio[0].checked)
	{
		envioDesc = envio[0].value;
	}
	else
	{
		envioDesc = envio[1].value;
	}

	return envioDesc;
}

calcular.addEventListener("click", (e) =>
{
	e.preventDefault();

	pay.innerHTML = `<p class="contentPay"><span>R$</span> ${(ComboPay() + AdicionalPay() + EnvioPay()).toFixed(2)}</p>`;
	description.innerHTML = `<p class="contentDescription">
	<span>Combo:</span>
	<br> 
	${ComboDescription()} 
	<br> 
	<span>Adicional:</span>
	<br> 
	${AdicionalDescription()}
	<br> 
	<span>Forma de envio:</span>
	<br> 
	${EnvioDescription()} </p>`
	
});