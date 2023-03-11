# IB Evi
IB Evi app is designed for the use of IB Evi staff. It is a mobile student registry app built with SQLite database and secured with AES-128 encryption. In addition to registering and querying information about students for different semesters, the app allows customizing student entries with profile photos and notes. This way, instead of creating a boring text-only crowd of information that will rarely be looked at after a semester is passed, previous student entries can be used as some sort of memory book.

## Features
- **Main feature:** Register and query detailed information about students.
- **Customizable student profiles:** Student entries can be created by adding profile photos and notes in addition to other required entries.
- **Semesters:** Students from different semesters are saved to separate places, preventing slower performance and complicated usability as more records are added to the database.
- **Authentication:** New users can only access to the database after a current user accepts the access request of the new user. Users are not signed in with a password; instead, they request access by sending their unique device id, or a temporary token.
- **Security:** Data saved in server-side is encrypted with AES-128 algorithm.
- **Logging:** Since users deal with sensitive information, and entering incorrect information or deleting data may cause problems, Log of every action is recorded and made visible to users.

## Notes
Access to this project and the source code is restricted. If you are interested or have questions, contact me via email or social media and I will be happy to answer questions or discuss what is on your mind.
