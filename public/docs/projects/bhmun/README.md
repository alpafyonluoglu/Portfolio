# Bhmun Website
Bhmun website is designed for the use of Private Bilkent High School's MUN club. In addition to publicly accessible static pages providing information about the club and the conference, the website also includes a file storage subdomain, called Bhmun Drive, for sharing files securely and storing them in the cloud. 

## Bhmun Drive
Bhmun Drive is a closed platform that can only be accessed by users who receive an invitation from the platform admins. The platform allows creating drives, which are file containers like folders, managing access to drives, and uploading/downloading files to/from drives. It is a practical solution for securely sharing files while being able to restrict access to selected users or user groups. Admins can view and manage users, invite new users to create their accounts and start using the platform, view and manage drives, and link users with drives by assigning different access levels. Users can access their assigned drives, upload files, and view uploaded files if they are authorized. 

### Features
- **Main feature:** Create, view, manage users and drives, link users with drives and restrict access as required.
- **Access levels:** To restrict access to data, a user can be assigned three different access levels to access a drive: full access, upload-only, blocked. Full access authorizes a user to upload, view, download, and delete files from a drive. Upload-only access authorizes a user to only upload files to a drive and view files uploaded by that user. Blocked access blocks access of user to the drive.
- **Access links:** To allow people to quickly upload files to a drive without having need to create an account, admins are given the ability to create an access link for a drive that allows anyone with the access link to upload files to the drive. These users are authorized temporarily to only upload files to that specific drive and no other action is authorized.
- **Privacy:** Only hashed user passwords are stored on the server side, preventing passwords to be leaked in case of an attack. Other than required information, no optional data is collected or sent to the server.
- **Security:** Users are authenticated with email and password. Signed URLs are used to download files from the drive. Access links for resetting passwprds or verifying emails are generated with a 48-hour lifespan.
- **Verification:** A user is accepted to the platform after their email address is verified with a verification link that is sent automatically to their email address.
- **Logging:** Log of every action is recorded and no action is allowed without signing in. Admins are given access to access logs, but not modify them.


### Screenshots
<p float="left">
  <img src="/docs/projects/bhmun/images/login.jpg" alt="Login" height="250"/>
  <img src="/docs/projects/bhmun/images/drives.jpg" alt="Drives" height="250"/>

  <img src="/docs/projects/bhmun/images/drive-settings.jpg" alt="Drive settings" height="250"/>
  <img src="/docs/projects/bhmun/images/admin-dashboard.jpg" alt="Admin dashboard" height="250"/>

  <img src="/docs/projects/bhmun/images/drive-content.jpg" alt="Drive content" height="250"/>
  <img src="/docs/projects/bhmun/images/upload-file.jpg" alt="Upload" height="250"/>  

  <img src="/docs/projects/bhmun/images/users.jpg" alt="Users" height="250"/>
  <img src="/docs/projects/bhmun/images/new-user.jpg" alt="New user" height="250"/>

  <img src="/docs/projects/bhmun/images/reset-password.jpg" alt="Reset password email" height="250"/>
</p>

## Notes
Access to the Bhmun Drive source code is restricted. If you are interested or have questions, contact me via email or social media and I will be happy to answer questions or discuss what is on your mind.