# lista = [3,3,2 [3,5]]
# print('La lista es {}'.format(lista))
# diccionaio = {"nombre": "Ronaldo", "edad": 23}
# print('El diccionario es {}'.format(diccionaio))
# print('%.2f' % 123.444)

# def saludar():
#   print("Hola desde la funcion")

# saludar()

# class Alumno:
#   def saludar(self):
#     """Imprime un saludo en pantalla."""
#     print("¡Hola, desde la clase!")

# al = Alumno()
# al.saludar()

# x = int(input("Please enter an integer: "))
#     # Please enter an integer: 42
# if x < 0:
#   x = 0
#   print('Negative changed to zero')
# elif x == 0:
#   print('Zero')
# elif x == 1:
#   print('Single')
# else:
#   print('More')

# cuadrados = []
# for n in range(1,16):
#     cuadrados.append(n*n)
# print(cuadrados)
# # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225]
# lista = [1, 2, ['1']]
# print(lista)

# def recorrer_parametros_arbitrarios(parametro_fijo, *arbitrarios): 
#     print (parametro_fijo) 

#     # Los parámetros arbitrarios se corren como tuplas
#     for argumento in arbitrarios: 
#         print (argumento)

# recorrer_parametros_arbitrarios('Parametro Fijo', 'arbitrario 1', 'arbitrario 2', 'arbitrario 3')
# Parametro Fijo
# arbitrario 1
# arbitrario 2
# arbitrario 3


# print(str(23))
# print(str(3.5))
# print(str(True))
# 23
# 3.5
# True


# Definimos una clase padre
class Animal:
    pass

# Creamos una clase hija que hereda de la padre
class Perro(Animal):
    pass
# De hecho podemos ver como efectivamente la clase Perro es la hija de Animal usando __bases__

print(Perro.__bases__)
# (<class '__main__.Animal'>,)
# De manera similar podemos ver que clases descienden de una en concreto con __subclasses__.

print(Animal.__subclasses__())
# [<class '__main__.Perro'>]