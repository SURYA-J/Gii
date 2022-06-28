import sys

print("hello")
sys.stdout.flush()

# import numpy
# from PIL import Image
# import os
# numpy.set_printoptions(threshold=sys.maxsize)

# def get_image():
#     image = Image.open(r"test.jpeg") 
#     width, height = image.size
#     pixel_values = list(image.getdata())
#     if image.mode == "RGB":
#         channels = 3
#     elif image.mode == "L":
#         channels = 1
#     else:
#         print("Unknown mode: %s" % image.mode)
#         return None
#     pixel_values = numpy.array(pixel_values).reshape((width, height, channels))
#     return pixel_values

# image = get_image()
# print(image[0][0])

# iter_value=image.shape[0]
# print(iter_value)

# fWrite = open('./test.txt','w')
# for i in range(iter_value) : 
#     fWrite.write('\n'+str(image[i]))
# fWrite.close()
# ##################################################
# array = numpy.array(image, dtype=numpy.uint8)
# new_image = Image.fromarray(array)
# new_image.save('new.jpeg')

# #============================2nd shot=============================================
# def get_image1():
#     image1 = Image.open(r"new.jpeg") 
#     width, height = image1.size
#     pixel_values = list(image1.getdata())
#     if image1.mode == "RGB":
#         channels = 3
#     elif image1.mode == "L":
#         channels = 1
#     else:
#         print("Unknown mode: %s" % image1.mode)
#         return None
#     pixel_values = numpy.array(pixel_values).reshape((width, height, channels))
#     return pixel_values

# image1 = get_image1()
# print(image1[0][0])

# iter_value1=image1.shape[0]
# print(iter_value1)

# fWrite1 = open('./test.txt','w')
# for i in range(iter_value1) : 
#     fWrite1.write('\n'+str(image[i]))
# fWrite1.close()
# ##################################################
# array1 = numpy.array(image1, dtype=numpy.uint8)
# new_image1 = Image.fromarray(array1)
# new_image1.save('new1.jpeg')