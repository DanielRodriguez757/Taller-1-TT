import sqlite3
import random
import string

def generar_nombre():
    nombres = ['mario', 'daniela', 'camilo', 'Laura', 'Pedro']
    apellidos = ['Gonzalez', 'Rodríguez', 'Fernandez', 'Lopez', 'Martínez', 'Gomez', 'Sanchez']
    nombre = random.choice(nombres) + ' ' + random.choice(apellidos)
    return nombre

def generar_correo():
    dominios = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com']
    nombre = ''.join(random.choices(string.ascii_lowercase, k=8))
    dominio = random.choice