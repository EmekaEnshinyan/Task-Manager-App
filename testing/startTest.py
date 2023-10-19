from selenium import webdriver
#from selenium.webdriver.common.keys import Keys

#browser = webdriver.Firefox()
#browser.get('http://localhost:5173/?addTask')

val = input("Enter your Local Host # i.e 3000: ")
print(val)

if not val:
    val = '3000'

browser = webdriver.Firefox()
browser.get('http://localhost:'+ val +'/?addTask')


#test input box
##inputElement = driver.find_element_by_id("addTask")
##inputElement.send_keys('Task#1:Adding this value')

#submit value
##inputElement.submit() 

#check value was submitted into table correctly
##getElement = driver.find_element_by_id("Task#1:Adding this value")
##if (getElement == inputElement):
    #added task correctly
##    console.log("Worked")
##else :
##    console.log("Failed")

##driver.quit()