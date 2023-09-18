from loja import *
# Exemplo de uso:
produto1 = Produto(descricao = "VESTIDO SIMPLES", situacao = "SITUAÇAO: SEMINOVO", cor ="AZUL", nome_imagem="imgs/blusa1.fem.jpg")
#produto2 = Produto("Calça")

with app.app_context():
    db.create_all()
    db.session.add(produto1)
    db.session.commit()
    print(produto1)
    print(produto1.json())

