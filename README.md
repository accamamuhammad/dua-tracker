# Dua tracker

- An app to keep track of my duas.

### Dependencies to use

1. vscode-pdf

# how to pass data from child to parent (hack)

1. Create two components child and parent
2. Add props to the () of the child component
3. Add `onChange={(e) => props.handlePassingData(data)}` to the button you want to use to pass data
4. To recieve data add this to the parent component `<Child handlePassingData={(data) => setDataFromChilf(data)} />`,
