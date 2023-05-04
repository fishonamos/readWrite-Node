# How to Use

Being able to read from files on your local file system can be hugely useful and there are a number of things you can build on top of this. A log reader, importing information from spreadsheets and xml files or whatever you can think of, being able to read from files is hugely useful.

<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.31 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Thu May 04 2023 08:01:36 GMT-0700 (PDT)
* Source doc: Requirement
* Tables are currently converted to HTML tables.
----->



## Requirement

Node.js (https://nodejs.org/)


## Installation

Clone the repository to your local machine.


```
git clone https://github.com/fishonamos/readWrite-Node.git
```


Navigate to the project directory.


```
cd readWrite-Node
```


Install dependencies.


```
npm install
```



## Usage

Place the file you want to read in the input directory with the name input.txt.

Run the program.


```
npm start
```


The program will read the contents of input.txt and write them to a file called output.txt in the output directory.

Check the output.txt file in the output directory to verify that the data was written correctly.
