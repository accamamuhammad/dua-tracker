# Dua tracker

- An app to keep track of my duas.
- A place to store custom dua.
- A dua generator coming soon !!!.
- A hadith generator to generate random hadith.
- A Quran verse/surah generator to generate random Quran verses and surahs.

## main parts of the application

- This application consits of four main parts.

1. Daily Dua: Dua to do on a daily basis; morning adkar, evening adkar, after prayer adkar, and adkar before you sleep.
2. Special Dua: This is a place to store dua you might have seen online and want to do them on a regular basis.
3. Hadith Generator: Generate random hadith, it uses a free api that contains all the hadith to generate random hadith
4. Quran Generator: Generate quran verses and surahs, it also uses a free api created by the same person to get the data

## Features

1. Labels: I used labels to make it easy for the user.
2. pop-up: I used a pop-up instead of the conventional accordin to maximise screen size for small screen sizes, & becuase you need space for the arabic version and transliteration.
3. Dark-mode: For people who prefer dark mode.

# Learn

## how to pass data from child to parent (hack)

1. Create two components child and parent
2. Add props to the () of the child component
3. Add `onChange={(e) => props.handlePassingData(data)}` to the button you want to use to pass data
4. To recieve data add this to the parent component `<Child handlePassingData={(data) => setDataFromChilf(data)} />`,
