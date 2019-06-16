import xlrd
from collections import OrderedDict
import simplejson as json


wb = xlrd.open_workbook('Test01.xlsx')
# print(wb.sheet_names())
sh = wb.sheet_by_index(0)

products_list = []
head = sh.row_values(0)
# print(head)

for rownum in range(1, sh.nrows):
    # print(sh.row_values(rownum))
    product = OrderedDict()
    product_row = sh.row_values(rownum)
    for i in range(len(head)):
        # print(head[i])
        product[head[i]] = product_row[i]
    products_list.append(product)
# print(products_list)

# product_id = sh.col_values(0)
# print(product_id)

j = json.dumps(products_list)
with open('data.json', 'w') as f:
    f.write(j)

