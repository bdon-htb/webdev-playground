from bs4 import BeautifulSoup
import requests

# This is the script used to collect all the quotes for my project.
# They all orginate from goodreads.com as seen in the url string.
# After thorough testing I've noticed that some of the quotes come out strange.
# It is currently unknown if the parsing error is within the javascript or python. 

FILENAME = 'inspirational_quotes.csv'
url = f'https://www.goodreads.com/quotes/tag/inspirational'

for i in range(1,101):
    page_num = i
    working_url = f'{url}?page={page_num}'
    print(f'Starting with page {page_num}... URL: {working_url}')

    content = requests.get(working_url).text.encode('utf-8')
    soup = BeautifulSoup(content, 'lxml')
    quote_blocks = soup.find_all('div', {'class': 'quoteText'})

    with open(FILENAME, 'a') as file:
        for q in quote_blocks:
            if not ('//<![CDATA[' in q.text): # Excludes unnecessary javascript.
                q_list = q.text.strip().replace('\n','')
                q_list = q_list.split('―')
                quote = q_list[0].strip()
                author = q_list[1].strip()
                string = f'{quote}, {author}\n'
                try: # Skip writing unrecognized characters.
                    file.write(string)
                except:
                    pass

    print(f'Done writing for page {page_num}! URL: {working_url}')
