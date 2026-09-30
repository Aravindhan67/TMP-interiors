import sys
from bs4 import BeautifulSoup

def analyze_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    
    # Remove script and style elements
    for script in soup(["script", "style", "svg", "noscript"]):
        script.extract()
        
    print("=== Title ===")
    print(soup.title.string if soup.title else "No title")
    print("\n=== Headings ===")
    for heading in soup.find_all(['h1', 'h2', 'h3', 'h4']):
        text = heading.get_text(strip=True)
        if text:
            print(f"{heading.name}: {text}")
            
    print("\n=== Links / Navigation ===")
    nav_links = soup.find_all('a')
    nav_set = set()
    for a in nav_links:
        text = a.get_text(strip=True)
        if text and text not in nav_set:
            nav_set.add(text)
            print(f"Link: {text}")
            if len(nav_set) > 20:
                print("... (truncated)")
                break

    print("\n=== Sections / Content ===")
    # Print out large chunks of text to see structure
    for section in soup.find_all(['section', 'div', 'main']):
        # only look at direct text or meaningful paragraphs
        paragraphs = section.find_all('p', recursive=False)
        if paragraphs:
            for p in paragraphs:
                text = p.get_text(strip=True)
                if len(text) > 20:
                    print(f"Content: {text[:100]}...")

if __name__ == "__main__":
    file_path = r"C:\Users\ARAVINDHAN T\.gemini\antigravity-ide\brain\b1a48484-8551-4a56-a594-d967f1516c5e\.system_generated\steps\61\content.md"
    analyze_html(file_path)
