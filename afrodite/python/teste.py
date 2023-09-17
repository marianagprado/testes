from loja import *
# Exemplo de uso:
produto1 = Produto(descricao = "VESTIDO SIMPLES", situacao = "SITUAÇAO: SEMINOVO", cor ="AZUL")
#produto2 = Produto("Calça")

db.session.add(produto1)
db.session.commit()
print(produto1)
print(produto1.json())

