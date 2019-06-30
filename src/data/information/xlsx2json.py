import xlrd
from collections import OrderedDict
import simplejson as json


wb = xlrd.open_workbook('Test01.xlsx')
# print(wb.sheet_names())
sh = wb.sheet_by_index(0)

# products_list = []
head = sh.row_values(0)
# print(head)


def alldata():
    products_list = OrderedDict()
    for rownum in range(1, sh.nrows):
        # print(sh.row_values(rownum))
        product = OrderedDict()
        product_row = sh.row_values(rownum)
        for i in range(1, len(head)):
            # print(head[i])
            if(head[i] == "skin"):
                product[head[i]] = product_row[i].split(',')
            elif(head[i] == "brand"):
                product[head[i]] = product_row[i].lower()
            else:
                product[head[i]] = product_row[i]
        products_list[product_row[0]] = product
    return (products_list)
# product_id = sh.col_values(0)
# print(product_id)


def skin():
    products_list = OrderedDict()
    for rownum in range(1, sh.nrows):
        # print(sh.row_values(rownum))
        product = OrderedDict()
        product_row = sh.row_values(rownum)
        for i in range(1, len(head)):
            # print(head[i])
            if(head[i] == "img" or head[i] == "name" or head[i] == "brand"):
                product[head[i]] = product_row[i]
            elif(head[i] == "skin"):
                s = ["", "", "", ""]
                skintype = product_row[i].split(',')
                for skin in skintype:
                    if skin == "ผิวธรรมดา":
                        s[0] = "normal"
                    elif skin == "ผิวมัน":
                        s[1] = "oily"
                    elif skin == "ผิวแห้ง":
                        s[2] = "dry"
                    elif skin == "ผิวบอบบาง":
                        s[3] = "sensitive"
                product[head[i]] = s
        products_list[product_row[0]] = product
    return (products_list)


def brand():
    brands_list = OrderedDict()
    brands_list["innisfree"] = innisfree()
    return (brands_list)


def innisfree():
    products_list = {}
    for rownum in range(1, sh.nrows):
        # print(sh.row_values(rownum))
        product = {}
        product_row = sh.row_values(rownum)
        for i in range(1, len(head)):
            # print(head[i])
            if(head[i] == "img" or head[i] == "name" or head[i] == "brand"):
                product[head[i]] = product_row[i]
            elif(head[i] == "skin"):
                s = ["", "", "", ""]
                skintype = product_row[i].split(',')
                for skin in skintype:
                    if skin == "ผิวธรรมดา":
                        s[0] = "normal"
                    elif skin == "ผิวมัน":
                        s[1] = "oily"
                    elif skin == "ผิวแห้ง":
                        s[2] = "dry"
                    elif skin == "ผิวบอบบาง":
                        s[3] = "sensitive"
                product[head[i]] = s
        print(product)
        try:
            products_list[product_row[3]][product_row[0]] = product
        except:
            products_list[product_row[3]] = {}
            products_list[product_row[3]][product_row[0]] = product
    return (products_list)

# def innisfree():
#     brand = OrderedDict()
#     for rownum in range(1, sh.nrows):
#         product_row = sh.row_values(rownum)
#         try:
#             brand[product_row[3]].append(product_row[0])
#         except:
#             brand[product_row[3]] = [product_row[0]]
#     return (brand)


products_list = brand()


# products_list = skin()
# # print(products_list)
j = json.dumps(products_list)
with open('brands2.json', 'w') as f:
    f.write(j)
