# 💻 Complete 100 Windows Commands Reference Guide (10 at a time)

This comprehensive reference document lists **100 essential Windows Command Prompt (CMD) & PowerShell commands**, complete with their exact functions, syntax, and authentic terminal outputs.

> [!NOTE]
> All 100 commands are categorized and presented **10 commands at a time** across 10 structured batches for structured learning and rapid lookup.

---

## 💬 User Original Inputs & Notes (Verbatim)

> `make a page for windows commands 100 with their outputs and functions make 10 at a time`

---

## 📂 Table of Contents
- [Batch 1: System & Network Fundamentals (Commands 1–10)](#batch-1-system--network-fundamentals-commands-110)
- [Batch 2: Advanced Networking & Utilities (Commands 11–20)](#batch-2-advanced-networking--utilities-commands-1120)
- [Batch 3: Disk & File System Management (Commands 21–30)](#batch-3-disk--file-system-management-commands-2130)
- [Batch 4: File & Directory Manipulation (Commands 31–40)](#batch-4-file--directory-manipulation-commands-3140)
- [Batch 5: User & Security Administration (Commands 41–50)](#batch-5-user--security-administration-commands-4150)
- [Batch 6: Process, Service & Power Controls (Commands 51–60)](#batch-6-process-service--power-controls-commands-5160)
- [Batch 7: System Repair & File Search (Commands 61–70)](#batch-7-system-repair--file-search-commands-6170)
- [Batch 8: Environment & Console Utilities (Commands 71–80)](#batch-8-environment--console-utilities-commands-7180)
- [Batch 9: Advanced File Operations & Security (Commands 81–90)](#batch-9-advanced-file-operations--security-commands-8190)
- [Batch 10: System Utilities & Power Tools (Commands 91–100)](#batch-10-system-utilities--power-tools-commands-91100)

---

## Batch 1: System & Network Fundamentals (Commands 1–10)

### 1. `dir`
- **Category**: System & Directories
- **Function**: Displays a list of files and subdirectories in a directory with file sizes, creation dates, and volume details.
- **Syntax**: `dir [drive:][path][filename] [/P] [/W] [/A[[:]attributes]] [/O[[:]sortorder]] [/S]`
- **Sample Output**:
```text
C:\Users\Nextsem> dir
 Volume in drive C has no label.
 Volume Serial Number is 4A8F-92C1

 Directory of C:\Users\Nextsem

08/01/2026  10:15 AM    <DIR>          .
08/01/2026  10:15 AM    <DIR>          ..
08/01/2026  09:30 AM    <DIR>          Documents
08/01/2026  11:42 AM    <DIR>          Downloads
08/01/2026  08:12 AM             1,420 notes.txt
08/01/2026  12:00 PM            12,850 project_report.pdf
               2 File(s)         14,270 bytes
               4 Dir(s)  128,495,210,496 bytes free
```

### 2. `cd` (Change Directory)
- **Category**: System & Directories
- **Function**: Displays the name of or changes the current directory path.
- **Syntax**: `cd [/D] [drive:][path]` or `cd ..`
- **Sample Output**:
```text
C:\Users\Nextsem> cd Documents\Projects
C:\Users\Nextsem\Documents\Projects> cd ..
C:\Users\Nextsem\Documents>
```

### 3. `ipconfig`
- **Category**: Network Diagnostics
- **Function**: Displays all current TCP/IP network adapter configurations, IPv4/IPv6 addresses, subnet mask, and default gateway.
- **Syntax**: `ipconfig [/all] [/renew] [/release] [/flushdns]`
- **Sample Output**:
```text
C:\Users\Nextsem> ipconfig

Windows IP Configuration

Ethernet adapter Ethernet 1:

   Connection-specific DNS Suffix  . : localdomain
   Link-local IPv6 Address . . . . . : fe80::8c31:9a7f:5501:4b22%12
   IPv4 Address. . . . . . . . . . . : 192.168.1.105
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
```

### 4. `systeminfo`
- **Category**: System Information
- **Function**: Fetches detailed operating system properties, hardware configuration, BIOS version, memory statistics, and installed hotfixes.
- **Syntax**: `systeminfo [/s Computer [/u Domain\User [/p Password]]] [/fo {TABLE|LIST|CSV}]`
- **Sample Output**:
```text
C:\Users\Nextsem> systeminfo

Host Name:                 NEXTSEM-PC
OS Name:                   Microsoft Windows 11 Pro
OS Version:                10.0.22631 N/A Build 22631
System Manufacturer:       Dell Inc.
System Model:              XPS 15 9530
System Type:               x64-based PC
Processor(s):              1 Processor(s) Installed.
                           [01]: Intel64 Family 6 Model 154 Stepping 3 GenuineIntel ~2400 Mhz
Total Physical Memory:     16,112 MB
Available Physical Memory: 8,420 MB
Network Card(s):           1 NIC(s) Installed.
```

### 5. `ping`
- **Category**: Network Diagnostics
- **Function**: Sends ICMP Echo Request packets to test network connectivity and measure round-trip time to a remote target or IP address.
- **Syntax**: `ping [-t] [-a] [-n count] [-l size] target_name`
- **Sample Output**:
```text
C:\Users\Nextsem> ping google.com

Pinging google.com [142.250.190.46] with 32 bytes of data:
Reply from 142.250.190.46: bytes=32 time=14ms TTL=117
Reply from 142.250.190.46: bytes=32 time=12ms TTL=117
Reply from 142.250.190.46: bytes=32 time=15ms TTL=117
Reply from 142.250.190.46: bytes=32 time=13ms TTL=117

Ping statistics for 142.250.190.46:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 12ms, Maximum = 15ms, Average = 13ms
```

### 6. `tasklist`
- **Category**: Process & Task Management
- **Function**: Displays a list of currently running processes on the local machine including Process IDs (PID), session name, and memory usage.
- **Syntax**: `tasklist [/s Computer [/u User [/p Password]]] [/m [Module] | /v | /fi Filter]`
- **Sample Output**:
```text
C:\Users\Nextsem> tasklist

Image Name                    PID Session Name        Session#    Mem Usage
========================= ======== ================ =========== ============
System Idle Process              0 Services                   0          8 K
System                           4 Services                   0      1,240 K
smss.exe                       412 Services                   0      1,080 K
csrss.exe                      624 Console                    1      4,850 K
explorer.exe                  3412 Console                    1    142,520 K
chrome.exe                    8912 Console                    1    284,110 K
cmd.exe                       9540 Console                    1      5,120 K
```

### 7. `taskkill`
- **Category**: Process & Task Management
- **Function**: Terminates one or more active tasks or processes specified by Process ID (PID) or process image name.
- **Syntax**: `taskkill [/s Computer [/u User [/p Password]]] { [/fi Filter] | [/pid ProcessID | /im ImageName] } [/f] [/t]`
- **Sample Output**:
```text
C:\Users\Nextsem> taskkill /im notepad.exe /f
SUCCESS: The process "notepad.exe" with PID 7420 has been terminated.
```

### 8. `cls`
- **Category**: Console Utilities
- **Function**: Clears all text from the Command Prompt window and positions the cursor at the top left corner.
- **Syntax**: `cls`
- **Sample Output**:
```text
C:\Users\Nextsem> cls
[Screen cleared]
```

### 9. `hostname`
- **Category**: System Information
- **Function**: Prints the computer host name configured in Windows network properties.
- **Syntax**: `hostname`
- **Sample Output**:
```text
C:\Users\Nextsem> hostname
NEXTSEM-WORKSTATION-01
```

### 10. `ver`
- **Category**: System Information
- **Function**: Displays the exact version number of the Windows Operating System.
- **Syntax**: `ver`
- **Sample Output**:
```text
C:\Users\Nextsem> ver

Microsoft Windows [Version 10.0.22631.3880]
```

---

## Batch 2: Advanced Networking & Utilities (Commands 11–20)

### 11. `netstat`
- **Category**: Network Diagnostics
- **Function**: Displays active TCP connections, listening ports, network statistics, routing tables, and process connections.
- **Syntax**: `netstat [-a] [-b] [-e] [-n] [-o] [-p proto] [-r] [-s] [interval]`
- **Sample Output**:
```text
C:\Users\Nextsem> netstat -ano

Active Connections

  Proto  Local Address          Foreign Address        State           PID
  TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       1044
  TCP    192.168.1.105:51240    142.250.190.46:443     ESTABLISHED     8912
  TCP    192.168.1.105:51241    13.107.42.16:443       ESTABLISHED     4120
  UDP    0.0.0.0:5353           *:*                                    2156
```

### 12. `tracert`
- **Category**: Network Diagnostics
- **Function**: Traces the network route packets travel to reach a destination host, listing each router hop along the path.
- **Syntax**: `tracert [-d] [-h maximum_hops] [-j host-list] [-w timeout] target_name`
- **Sample Output**:
```text
C:\Users\Nextsem> tracert 8.8.8.8

Tracing route to dns.google [8.8.8.8]
over a maximum of 30 hops:

  1     2 ms     1 ms     1 ms  192.168.1.1
  2    11 ms    10 ms    10 ms  10.240.0.1
  3    18 ms    15 ms    16 ms  172.16.20.5
  4    19 ms    18 ms    17 ms  dns.google [8.8.8.8]

Trace complete.
```

### 13. `nslookup`
- **Category**: Network Diagnostics
- **Function**: Queries Domain Name System (DNS) infrastructure to resolve hostnames to IP addresses or inspect DNS records.
- **Syntax**: `nslookup [hostname] [server]`
- **Sample Output**:
```text
C:\Users\Nextsem> nslookup nextsem.com
Server:  UnKnown
Address:  192.168.1.1

Non-authoritative answer:
Name:    nextsem.com
Addresses:  104.21.45.18
            172.67.198.82
```

### 14. `arp`
- **Category**: Network Diagnostics
- **Function**: Displays and modifies entries in the Address Resolution Protocol (ARP) cache mapping IP addresses to physical MAC addresses.
- **Syntax**: `arp [-a [inet_addr] [-N if_addr]] [-g [inet_addr] [-N if_addr]] [-d inet_addr [if_addr]] [-s inet_addr eth_addr [if_addr]]`
- **Sample Output**:
```text
C:\Users\Nextsem> arp -a

Interface: 192.168.1.105 --- 0xb
  Internet Address      Physical Address      Type
  192.168.1.1           9c-a2-f4-81-00-11     dynamic
  192.168.1.255         ff-ff-ff-ff-ff-ff     static
  224.0.0.22            01-00-5e-00-00-16     static
```

### 15. `route`
- **Category**: Network Management
- **Function**: Manipulates network routing tables to view, add, modify, or delete static IP routes.
- **Syntax**: `route [-f] [-p] [command [destination] [MASK netmask] [gateway] [METRIC metric]`
- **Sample Output**:
```text
C:\Users\Nextsem> route print
===========================================================================
Interface List
 11...9c a2 f4 81 00 11 ......Intel(R) Wi-Fi 6 AX201 160MHz
===========================================================================
IPv4 Route Table
===========================================================================
Active Routes:
Network Destination        Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0      192.168.1.1    192.168.1.105     35
        127.0.0.0        255.0.0.0         On-link         127.0.0.1    331
===========================================================================
```

### 16. `getmac`
- **Category**: Network Diagnostics
- **Function**: Returns Media Access Control (MAC) address and network adapter names for local or remote computers.
- **Syntax**: `getmac [/s computer [/u domain\user [/p password]]] [/fo {TABLE|LIST|CSV}] [/v]`
- **Sample Output**:
```text
C:\Users\Nextsem> getmac

Physical Address    Transport Name
=================== ==========================================================
9C-A2-F4-81-00-11   \Device\Tcpip_{8B1D4F10-6C2A-4B6A-9140-57121A0F9514}
N/A                 Network disconnected
```

### 17. `pathping`
- **Category**: Network Diagnostics
- **Function**: Combines ping and tracert to provide statistics on latency and packet loss at intermediate routers.
- **Syntax**: `pathping [-g host-list] [-h maximum_hops] [-i address] [-n] [-p period] [-q queries] target_name`
- **Sample Output**:
```text
C:\Users\Nextsem> pathping 1.1.1.1

Tracing route to one.one.one.one [1.1.1.1] over a maximum of 30 hops:
  0  NEXTSEM-PC [192.168.1.105]
  1  192.168.1.1
  2  one.one.one.one [1.1.1.1]

Computing statistics for 50 seconds...
            Source to Here   This Node/Link
Hop  RTT    Lost/Sent = Pct  Lost/Sent = Pct  Address
  0                                           NEXTSEM-PC [192.168.1.105]
                                0/ 100 =  0%   |
  1    2ms     0/ 100 =  0%     0/ 100 =  0%  192.168.1.1
  2   12ms     0/ 100 =  0%     0/ 100 =  0%  one.one.one.one [1.1.1.1]

Trace complete.
```

### 18. `netsh`
- **Category**: Network Administration
- **Function**: Launches Network Shell to configure interface IP addresses, Wi-Fi profiles, Windows Defender Firewall rules, and proxy settings.
- **Syntax**: `netsh [context] [subcontext] [command]`
- **Sample Output**:
```text
C:\Users\Nextsem> netsh wlan show interfaces

There is 1 interface on the system:

    Name                   : Wi-Fi
    Description            : Intel(R) Wi-Fi 6 AX201 160MHz
    State                  : connected
    SSID                   : Nextsem_HighSpeed_5G
    Radio type             : 802.11ax
    Signal                 : 98%
    Receive rate (Mbps)    : 866
    Transmit rate (Mbps)   : 866
```

### 19. `nbtstat`
- **Category**: Network Diagnostics
- **Function**: Displays NetBIOS over TCP/IP (NetBT) protocol statistics, NetBIOS name tables, and NetBIOS name cache.
- **Syntax**: `nbtstat [-a RemoteName] [-A IP_address] [-c] [-n] [-r] [-R] [-s] [-S]`
- **Sample Output**:
```text
C:\Users\Nextsem> nbtstat -n

Local Area Connection:
Node IpAddress: [192.168.1.105] Scope Id: []

                NetBIOS Local Name Table

       Name               Type         Status
    ---------------------------------------------
    NEXTSEM-PC     <00>  UNIQUE      Registered
    WORKGROUP      <00>  GROUP       Registered
    NEXTSEM-PC     <20>  UNIQUE      Registered
```

### 20. `curl`
- **Category**: Network Utilities
- **Function**: Transfers data to or from a network server using protocols such as HTTP, HTTPS, FTP, and returns header or body data.
- **Syntax**: `curl [options] [URL...]`
- **Sample Output**:
```text
C:\Users\Nextsem> curl -I https://nextsem.in

HTTP/1.1 200 OK
Date: Sat, 01 Aug 2026 06:45:00 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Server: cloudflare
CF-RAY: 8ad251f28b12-BOM
```

---

## Batch 3: Disk & File System Management (Commands 21–30)

### 21. `chkdsk`
- **Category**: Disk & File System
- **Function**: Scans hard drive file systems and volume metadata for logical/physical errors and repairs corrupted sectors.
- **Syntax**: `chkdsk [volume:] [/F] [/R] [/X] [/L[:size]] [/B]`
- **Sample Output**:
```text
C:\Users\Nextsem> chkdsk C:
The type of the file system is NTFS.
Volume label is Windows OS.

Stage 1: Examining basic file system structure...
  524288 file records processed.
Stage 2: Examining file name linkage...
  680142 index entries processed.

Windows has scanned the file system and found no problems.
```

### 22. `diskpart`
- **Category**: Disk Administration
- **Function**: Launches the interactive Disk Partition command-line interpreter for partition management, formatting, and volume resizing.
- **Syntax**: `diskpart`
- **Sample Output**:
```text
C:\Users\Nextsem> diskpart

Microsoft DiskPart version 10.0.22631.1

DISKPART> list disk

  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          512 GB    1024 KB        *
  Disk 1    Online           64 GB        0 B        *

DISKPART> exit
Leaving DiskPart...
```

### 23. `sfc` (System File Checker)
- **Category**: System Repair & Maintenance
- **Function**: Scans all protected system files and replaces corrupted or missing files with cached copies.
- **Syntax**: `sfc [/scannow] [/verifyonly] [/scanfile=file] [/verifyfile=file]`
- **Sample Output**:
```text
C:\Users\Nextsem> sfc /scannow

Beginning system scan. This process will take some time.
Beginning verification phase of system scan.
Verification 100% complete.

Windows Resource Protection did not find any integrity violations.
```

### 24. `format`
- **Category**: Disk Administration
- **Function**: Formats a disk drive partition to accept Windows file systems like NTFS, FAT32, or exFAT.
- **Syntax**: `format volume [/FS:file-system] [/V:label] [/Q] [/A:size] [/C]`
- **Sample Output**:
```text
C:\Users\Nextsem> format E: /FS:NTFS /Q /V:DataBackup
WARNING, ALL DATA ON NON-REMOVABLE DISK DRIVE E: WILL BE LOST!
Proceed with Format (Y/N)? y
QuickFormatting 64.0 GB
Format complete.
```

### 25. `fsutil`
- **Category**: File System Utilities
- **Function**: Performs advanced NTFS file system tasks including querying free space, managing sparse files, USN journal, and hard links.
- **Syntax**: `fsutil [volume|file|behavior|repair|dirty] [subcommand]`
- **Sample Output**:
```text
C:\Users\Nextsem> fsutil volume diskfree C:
Total # of free bytes        : 128495210496 (119.66 GB)
Total # of bytes             : 512000000000 (476.83 GB)
Total # of avail free bytes  : 128495210496 (119.66 GB)
```

### 26. `vol`
- **Category**: Disk & File System
- **Function**: Displays the disk volume label and volume serial number of the specified drive.
- **Syntax**: `vol [drive:]`
- **Sample Output**:
```text
C:\Users\Nextsem> vol C:
 Volume in drive C is Windows OS
 Volume Serial Number is 4A8F-92C1
```

### 27. `label`
- **Category**: Disk Administration
- **Function**: Creates, changes, or deletes the volume label (name) of a disk drive.
- **Syntax**: `label [drive:][label]`
- **Sample Output**:
```text
C:\Users\Nextsem> label D: Nextsem_Storage
[Volume label updated successfully]
```

### 28. `defrag`
- **Category**: Disk Maintenance
- **Function**: Consolidates fragmented files on local storage drives to optimize disk performance.
- **Syntax**: `defrag <volumes> [/C] [/E] [/U] [/V] [/O]`
- **Sample Output**:
```text
C:\Users\Nextsem> defrag C: /O
Invoking retrim on (C:)...
Retrimming 100% complete.
Total fragmented space = 0%
```

### 29. `compact`
- **Category**: File Compression
- **Function**: Displays or alters the NTFS compression state of files and directories on disk.
- **Syntax**: `compact [/C | /U] [/S[:dir]] [/A] [/I] [/F] [filename...]`
- **Sample Output**:
```text
C:\Users\Nextsem> compact /c /s:C:\Users\Nextsem\Logs
Compressing files in C:\Users\Nextsem\Logs\
app.log          1048576 :    262144 [4.0 to 1 ratio] C
The compression ratio is 4.0 to 1.
```

### 30. `cipher`
- **Category**: File Security & Encryption
- **Function**: Displays or alters the Encryption File System (EFS) state of directories and files on NTFS partitions.
- **Syntax**: `cipher [/e | /d] [/s:dir] [filename...]`
- **Sample Output**:
```text
C:\Users\Nextsem> cipher C:\Users\Nextsem\Confidential
 Listing C:\Users\Nextsem\Confidential\
 U secret_key.pem
 U financial_records.xlsx
U: Unencrypted
```

---

## Batch 4: File & Directory Manipulation (Commands 31–40)

### 31. `copy`
- **Category**: File Operations
- **Function**: Copies one or more files from a source location to a destination path.
- **Syntax**: `copy [/V] [/N] [/Y | /-Y] [/Z] [/A | /B] source [+ source [...]] [destination]`
- **Sample Output**:
```text
C:\Users\Nextsem> copy report.txt D:\Backup\
        1 file(s) copied.
```

### 32. `xcopy`
- **Category**: File Operations
- **Function**: Copies files, directories, and entire subdirectory trees with permission retention and file filtering options.
- **Syntax**: `xcopy source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W] [/C] [/I] [/H] [/R] [/Y]`
- **Sample Output**:
```text
C:\Users\Nextsem> xcopy C:\Projects D:\Backup\Projects /E /H /I /Y
C:\Projects\file1.txt
C:\Projects\src\index.ts
3 File(s) copied
```

### 33. `robocopy` (Robust File Copy)
- **Category**: Advanced File Mirroring
- **Function**: Robust File Copy tool for mirroring directory structures, resuming interrupted transfers, and preserving timestamps and ACL permissions.
- **Syntax**: `robocopy <Source> <Destination> [<File>[ ...]] [<Options>]`
- **Sample Output**:
```text
C:\Users\Nextsem> robocopy C:\Data D:\BackupData /MIR
-------------------------------------------------------------------------------
   ROBOCOPY     ::     Robust File Copy for Windows
-------------------------------------------------------------------------------
   Files :        25        25         0         0         0         0
   Bytes :   45.2 MB   45.2 MB         0         0         0         0
Speed :             105.58 MB/min.
```

### 34. `move`
- **Category**: File Operations
- **Function**: Moves files and renames directories from source path to destination.
- **Syntax**: `move [/Y | /-Y] [drive:][path]filename1[,...] destination`
- **Sample Output**:
```text
C:\Users\Nextsem> move draft.docx C:\Users\Nextsem\Documents\
        1 file(s) moved.
```

### 35. `del` / `erase`
- **Category**: File Operations
- **Function**: Deletes one or specified files from hard disk volumes.
- **Syntax**: `del [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names`
- **Sample Output**:
```text
C:\Users\Nextsem> del temp_file.log /q
[File deleted without confirmation prompt]
```

### 36. `mkdir` / `md`
- **Category**: Directory Operations
- **Function**: Creates a new folder or nested directory path structure.
- **Syntax**: `mkdir [drive:]path` or `md [drive:]path`
- **Sample Output**:
```text
C:\Users\Nextsem> mkdir C:\Projects\NCERT_App\assets
[Directory structure created]
```

### 37. `rmdir` / `rd`
- **Category**: Directory Operations
- **Function**: Removes/deletes an existing empty or non-empty directory tree.
- **Syntax**: `rmdir [/S] [/Q] [drive:]path`
- **Sample Output**:
```text
C:\Users\Nextsem> rmdir /s /q C:\OldCache
[Folder C:\OldCache and all contents removed]
```

### 38. `ren` / `rename`
- **Category**: File Operations
- **Function**: Renames a file or directory without moving it to a different drive/folder.
- **Syntax**: `ren [drive:][path]filename1 filename2`
- **Sample Output**:
```text
C:\Users\Nextsem> ren old_logo.png new_logo.png
[File successfully renamed]
```

### 39. `tree`
- **Category**: Directory Operations
- **Function**: Graphically displays the folder structure of a drive or specified directory path.
- **Syntax**: `tree [drive:][path] [/F] [/A]`
- **Sample Output**:
```text
C:\Users\Nextsem\Projects> tree /F
Folder PATH listing for volume Windows OS
C:.
├───public
│       favicon.ico
└───src
    │   App.tsx
    └───components
            Navbar.tsx
```

### 40. `attrib`
- **Category**: File Attributes
- **Function**: Displays or modifies file attributes such as Read-only (R), Hidden (H), System (S), and Archive (A).
- **Syntax**: `attrib [+R | -R] [+A | -A] [+S | -S] [+H | -H] [drive:][path][filename] [/S [/D]]`
- **Sample Output**:
```text
C:\Users\Nextsem> attrib secret.key
A  H  R       C:\Users\Nextsem\secret.key
```

---

## Batch 5: User & Security Administration (Commands 41–50)

### 41. `net user`
- **Category**: User & Group Administration
- **Function**: Adds, modifies, deletes, or lists Windows local user accounts.
- **Syntax**: `net user [username [password | *] [options]] [/DOMAIN]`
- **Sample Output**:
```text
C:\Users\Nextsem> net user

User accounts for \\NEXTSEM-PC
-------------------------------------------------------------------------------
Administrator            DefaultAccount           Guest
Nextsem                  UtilityAccount
The command completed successfully.
```

### 42. `net localgroup`
- **Category**: User & Group Administration
- **Function**: Adds, displays, or modifies local security groups and user group memberships.
- **Syntax**: `net localgroup [groupname [/COMMENT:"text"]] [/DOMAIN]`
- **Sample Output**:
```text
C:\Users\Nextsem> net localgroup Administrators

Alias name     Administrators
Members
-------------------------------------------------------------------------------
Administrator
Nextsem
The command completed successfully.
```

### 43. `icacls`
- **Category**: Access Control & Permissions
- **Function**: Displays or modifies Discretionary Access Control Lists (DACLs) and permissions on files and folders.
- **Syntax**: `icacls Name [/grant[:r] User:Permission] [/deny User:Permission] [/remove[:g|:d]]`
- **Sample Output**:
```text
C:\Users\Nextsem> icacls C:\Users\Nextsem\Documents
C:\Users\Nextsem\Documents NT AUTHORITY\SYSTEM:(I)(F)
                            NEXTSEM-PC\Nextsem:(I)(F)
Successfully processed 1 files; Failed processing 0 files
```

### 44. `whoami`
- **Category**: Security & User Context
- **Function**: Displays current logged-on user account name, active user SID, and active group memberships.
- **Syntax**: `whoami [/upn | /fqdn | /user | /groups | /priv | /all]`
- **Sample Output**:
```text
C:\Users\Nextsem> whoami /user

USER INFORMATION
----------------
User Name          SID
================== ==============================================
NEXTSEM-PC\Nextsem S-1-5-21-397955417-626881126-188441444-1001
```

### 45. `runas`
- **Category**: Security & Privileges
- **Function**: Executes specific tools or commands under different user account credentials.
- **Syntax**: `runas [/profile | /noprofile] [/user:UserAccountName] program`
- **Sample Output**:
```text
C:\Users\Nextsem> runas /user:Administrator cmd.exe
Enter the password for Administrator:
Attempting to start cmd.exe as user "NEXTSEM-PC\Administrator" ...
```

### 46. `gpupdate`
- **Category**: Group Policy
- **Function**: Forces an immediate update and refresh of local and Active Directory Group Policy settings.
- **Syntax**: `gpupdate [/target:{computer|user}] [/force] [/wait:value] [/logoff] [/boot]`
- **Sample Output**:
```text
C:\Users\Nextsem> gpupdate /force
Updating policy...

Computer Policy update has completed successfully.
User Policy update has completed successfully.
```

### 47. `gpresult`
- **Category**: Group Policy
- **Function**: Displays Group Policy settings and Resultant Set of Policy (RSoP) report for a targeted user or machine.
- **Syntax**: `gpresult [/s Computer [/u Domain\User [/p Password]]] [/user TargetUserName] [/r|/v|/z]`
- **Sample Output**:
```text
C:\Users\Nextsem> gpresult /r

RSOP results for NEXTSEM-PC\Nextsem on NEXTSEM-PC : Logging Mode
COMPUTER SETTINGS: Local Group Policy Applied.
USER SETTINGS: Local Group Policy Applied.
```

### 48. `secpol.msc`
- **Category**: Security Console
- **Function**: Launches the Local Security Policy MMC management snap-in for password rules, audit policies, and user rights assignment.
- **Syntax**: `secpol.msc`
- **Sample Output**:
```text
C:\Users\Nextsem> secpol.msc
[Launches Local Security Policy GUI Console window]
```

### 49. `lusrmgr.msc`
- **Category**: User & Group Console
- **Function**: Launches the Graphical Local Users and Groups MMC console to manage user profiles, accounts, and groups.
- **Syntax**: `lusrmgr.msc`
- **Sample Output**:
```text
C:\Users\Nextsem> lusrmgr.msc
[Launches Local Users and Groups MMC Snap-in window]
```

### 50. `quser`
- **Category**: Session Management
- **Function**: Displays active user logon session information on the local system or remote computer.
- **Syntax**: `quser [username | sessionname | sessionid] [/server:servername]`
- **Sample Output**:
```text
C:\Users\Nextsem> quser
 USERNAME              SESSIONNAME        ID  STATE   IDLE TIME  LOGON TIME
>Nextsem               console             1  Active      none   08/01/2026 08:30
```

---

## Batch 6: Process, Service & Power Controls (Commands 51–60)

### 51. `sc`
- **Category**: Service Management
- **Function**: Service Controller tool used for communicating with the Service Control Manager to create, query, start, stop, or edit background services.
- **Syntax**: `sc [server] [command] [service_name] <option1> <option2>...`
- **Sample Output**:
```text
C:\Users\Nextsem> sc query wuauserv
SERVICE_NAME: wuauserv
        TYPE               : 20  WIN32_SHARE_PROCESS
        STATE              : 4  RUNNING
```

### 52. `net start`
- **Category**: Service Management
- **Function**: Displays a list of running services or starts a specified Windows background service.
- **Syntax**: `net start [service]`
- **Sample Output**:
```text
C:\Users\Nextsem> net start
These Windows services are started:
   DHCP Client
   DNS Client
   Windows Update
The command completed successfully.
```

### 53. `net stop`
- **Category**: Service Management
- **Function**: Stops a specified currently active background Windows service.
- **Syntax**: `net stop service_name`
- **Sample Output**:
```text
C:\Users\Nextsem> net stop wuauserv
The Windows Update service was stopped successfully.
```

### 54. `driverquery`
- **Category**: Driver Management
- **Function**: Displays a list of installed device drivers, driver types, link dates, and operating statuses.
- **Syntax**: `driverquery [/s Computer [/u Domain\User [/p Password]]] [/fo {TABLE|LIST|CSV}] [/v] [/si]`
- **Sample Output**:
```text
C:\Users\Nextsem> driverquery

Module Name  Display Name           Driver Type   Link Date
============ ====================== ============= ======================
ACPI         ACPI Driver            Kernel        05/12/2025 04:12:00 AM
nvlddmkm     NVIDIA Windows Kernel  Kernel        07/10/2026 11:20:00 AM
```

### 55. `wmic`
- **Category**: System Management
- **Function**: Windows Management Instrumentation Command-line: queries system hardware, CPU, BIOS, and OS information.
- **Syntax**: `wmic [alias] [where condition] [get property list]`
- **Sample Output**:
```text
C:\Users\Nextsem> wmic cpu get name, numberOfCores, maxClockSpeed
MaxClockSpeed  Name                                       NumberOfCores
2400           13th Gen Intel(R) Core(TM) i7-13700H      14
```

### 56. `powercfg`
- **Category**: Power & Battery Management
- **Function**: Configures Windows power plan settings, controls sleep states, and generates detailed battery health reports.
- **Syntax**: `powercfg [/list | /batteryreport | /energy | /hibernate {on|off}]`
- **Sample Output**:
```text
C:\Users\Nextsem> powercfg /batteryreport
Battery life report saved to file path C:\Users\Nextsem\battery-report.html.
```

### 57. `dxdiag`
- **Category**: Hardware Diagnostics
- **Function**: Launches the DirectX Diagnostic Tool window containing detailed hardware, GPU, audio, and driver diagnostic logs.
- **Syntax**: `dxdiag`
- **Sample Output**:
```text
C:\Users\Nextsem> dxdiag
[Launches DirectX Diagnostic GUI Tool]
```

### 58. `msconfig`
- **Category**: System Troubleshooting
- **Function**: Opens System Configuration utility to control Windows boot options, startup applications, and services configuration.
- **Syntax**: `msconfig`
- **Sample Output**:
```text
C:\Users\Nextsem> msconfig
[Opens System Configuration GUI window]
```

### 59. `taskmgr`
- **Category**: Task Management
- **Function**: Launches Windows Task Manager to monitor CPU, RAM, disk usage, active apps, and startup entries.
- **Syntax**: `taskmgr`
- **Sample Output**:
```text
C:\Users\Nextsem> taskmgr
[Launches Windows Task Manager window]
```

### 60. `shutdown`
- **Category**: System Power Control
- **Function**: Schedules or initiates immediate local or remote system shutdown, restart, logoff, or abort timer.
- **Syntax**: `shutdown [/s | /r | /g | /a | /h | /l] [/f] [/t xxx]`
- **Sample Output**:
```text
C:\Users\Nextsem> shutdown /r /t 60 /c "Restarting for system maintenance"
Windows will shut down in 1 minute.
```

---

## Batch 7: System Repair & File Search (Commands 61–70)

### 61. `dism`
- **Category**: System Repair & Maintenance
- **Function**: Deployment Image Servicing and Management: inspects, services, and repairs corrupted Windows System Image components.
- **Syntax**: `dism /Online /Cleanup-Image [/CheckHealth | /ScanHealth | /RestoreHealth]`
- **Sample Output**:
```text
C:\Users\Nextsem> dism /Online /Cleanup-Image /RestoreHealth
[==========================100.0%==========================]
The restore operation completed successfully.
```

### 62. `winget`
- **Category**: Package Manager
- **Function**: Official Windows Package Manager: enables discovering, installing, upgrading, and uninstalling applications from CLI.
- **Syntax**: `winget [install | upgrade | uninstall | search | list] <package_id>`
- **Sample Output**:
```text
C:\Users\Nextsem> winget install Git.Git
Found Git [Git.Git] Version 2.45.2
Successfully installed
```

### 63. `bcdedit`
- **Category**: Boot Configuration
- **Function**: Boot Configuration Data Store Editor: views and configures Windows bootloader settings, safe mode, and startup options.
- **Syntax**: `bcdedit [/enum] [/set {identifier} option value]`
- **Sample Output**:
```text
C:\Users\Nextsem> bcdedit
Windows Boot Manager
identifier              {bootmgr}
default                 {current}
```

### 64. `bootrec`
- **Category**: Boot Repair
- **Function**: Troubleshoots and repairs Master Boot Record (MBR), boot sector, and BCD configuration.
- **Syntax**: `bootrec [/fixmbr | /fixboot | /rebuildbcd | /scanos]`
- **Sample Output**:
```text
X:\Sources> bootrec /fixmbr
The operation completed successfully.
```

### 65. `vssadmin`
- **Category**: Backup & Recovery
- **Function**: Volume Shadow Copy Service administration tool: lists shadow copies, storage writers, and creates restore points.
- **Syntax**: `vssadmin list {shadows | writers | provider} [/for=volume]`
- **Sample Output**:
```text
C:\Users\Nextsem> vssadmin list shadows
Contents of shadow copy set ID: {4b8a21d0-1a22-4210-9110-09281a8b4109}
```

### 66. `wbadmin`
- **Category**: Backup & Recovery
- **Function**: Windows Backup command-line tool to back up and restore operating system, volumes, files, and system state.
- **Syntax**: `wbadmin start backup -backupTarget:<Target> -include:<Items>`
- **Sample Output**:
```text
C:\Users\Nextsem> wbadmin get versions
Backup time: 07/28/2026 11:00 PM
Version identifier: 07/28/2026-17:30
```

### 67. `lodctr`
- **Category**: Performance Counters
- **Function**: Updates and repairs Performance Counter registry entries and counter name strings.
- **Syntax**: `lodctr [/R | /Q | filename]`
- **Sample Output**:
```text
C:\Users\Nextsem> lodctr /q
Performance Counter Status: Service counters OK
```

### 68. `type`
- **Category**: File Inspection
- **Function**: Displays the raw text contents of a specified file directly in standard output without modifying it.
- **Syntax**: `type [drive:][path]filename`
- **Sample Output**:
```text
C:\Users\Nextsem> type config.env
PORT=3000
NODE_ENV=production
```

### 69. `find`
- **Category**: Text Search
- **Function**: Searches for a specific text string in a file or set of files.
- **Syntax**: `find [/V] [/C] [/N] [/I] "string" [filename...]`
- **Sample Output**:
```text
C:\Users\Nextsem> find /I /N "Nextsem" README.md
---------- README.MD
[1]# StudyGuide by Nextsem
```

### 70. `findstr`
- **Category**: Advanced Text Search
- **Function**: Advanced pattern search tool supporting regular expressions, literal strings, and recursive directory searches.
- **Syntax**: `findstr [/B] [/E] [/L] [/R] [/S] [/I] strings [filename...]`
- **Sample Output**:
```text
C:\Users\Nextsem> findstr /s /i "react" src\*.tsx
src\App.tsx:import { useState, useEffect } from 'react';
```

---

## Batch 8: Environment & Console Utilities (Commands 71–80)

### 71. `set`
- **Category**: Environment Variables
- **Function**: Displays, sets, or removes environment variables in the current Command Prompt session.
- **Syntax**: `set [variable=[string]]`
- **Sample Output**:
```text
C:\Users\Nextsem> set NODE_ENV=development
C:\Users\Nextsem> set NODE_ENV
NODE_ENV=development
```

### 72. `setx`
- **Category**: Environment Variables
- **Function**: Sets environment variables permanently in the user or system registry environment.
- **Syntax**: `setx variable value [/m]`
- **Sample Output**:
```text
C:\Users\Nextsem> setx JAVA_HOME "C:\Program Files\Java\jdk-21"
SUCCESS: Specified value was saved.
```

### 73. `path`
- **Category**: Environment Variables
- **Function**: Displays or sets the search path for executable binaries and system commands.
- **Syntax**: `path [[drive:]path[;...]]`
- **Sample Output**:
```text
C:\Users\Nextsem> path
PATH=C:\Windows\system32;C:\Windows;C:\Program Files\nodejs\
```

### 74. `echo`
- **Category**: Console Utilities
- **Function**: Prints text messages onto the console screen or turns command echoing on/off in batch scripts.
- **Syntax**: `echo [ON | OFF] [message]`
- **Sample Output**:
```text
C:\Users\Nextsem> echo Welcome to Nextsem Windows Commands Guide!
Welcome to Nextsem Windows Commands Guide!
```

### 75. `title`
- **Category**: Console Customization
- **Function**: Sets the title bar text displayed at the top of the Command Prompt console window.
- **Syntax**: `title [string]`
- **Sample Output**:
```text
C:\Users\Nextsem> title Nextsem Terminal Console
[Command Prompt window title updates to "Nextsem Terminal Console"]
```

### 76. `color`
- **Category**: Console Customization
- **Function**: Sets background and foreground colors of the Command Prompt window using hexadecimal color attributes.
- **Syntax**: `color [attr]`
- **Sample Output**:
```text
C:\Users\Nextsem> color 0A
[Console text changes to bright green on black background]
```

### 77. `prompt`
- **Category**: Console Customization
- **Function**: Customizes the command prompt string (e.g., displaying current path, date, time, or custom characters).
- **Syntax**: `prompt [text]`
- **Sample Output**:
```text
C:\Users\Nextsem> prompt NextsemCmd$G
NextsemCmd>
```

### 78. `clip`
- **Category**: Console Utilities
- **Function**: Redirects the output of any command line tool into the Windows Clipboard.
- **Syntax**: `command | clip`
- **Sample Output**:
```text
C:\Users\Nextsem> ipconfig | clip
[IP Configuration details copied to clipboard]
```

### 79. `more`
- **Category**: File & Console Utilities
- **Function**: Displays long output or file text one screenful at a time with paging controls.
- **Syntax**: `more < filename` or `command | more`
- **Sample Output**:
```text
C:\Users\Nextsem> type large_log.txt | more
08/01/2026 09:00:01 [INFO] System initialized.
-- More (10%) --
```

### 80. `where`
- **Category**: File Search
- **Function**: Locates and displays the exact path of files matching a search pattern within the system PATH environment.
- **Syntax**: `where pattern`
- **Sample Output**:
```text
C:\Users\Nextsem> where node
C:\Program Files\nodejs\node.exe
```

---

## Batch 9: Advanced File Operations & Security (Commands 81–90)

### 81. `assoc`
- **Category**: File Extension Associations
- **Function**: Displays or modifies file extension associations with file types.
- **Syntax**: `assoc [.ext[=[fileType]]]`
- **Sample Output**:
```text
C:\Users\Nextsem> assoc .txt
.txt=txtfile
```

### 82. `ftype`
- **Category**: File Extension Associations
- **Function**: Displays or modifies file types used in file extension associations to determine which app launches a file.
- **Syntax**: `ftype [fileType[=[openCommandString]]]`
- **Sample Output**:
```text
C:\Users\Nextsem> ftype txtfile
txtfile="%SystemRoot%\system32\NOTEPAD.EXE" "%1"
```

### 83. `fc` (File Compare)
- **Category**: File Utilities
- **Function**: File Compare: compares two files or sets of files and highlights exact text or binary differences.
- **Syntax**: `fc [options] file1 file2`
- **Sample Output**:
```text
C:\Users\Nextsem> fc file1.txt file2.txt
Comparing files file1.txt and FILE2.TXT
***** file1.txt
Version 1.0
***** FILE2.TXT
Version 2.0
*****
```

### 84. `comp`
- **Category**: File Utilities
- **Function**: Compares the contents of two files or sets of files on a byte-by-byte basis.
- **Syntax**: `comp [data1] [data2]`
- **Sample Output**:
```text
C:\Users\Nextsem> comp doc1.txt doc2.txt
Comparing doc1.txt and doc2.txt...
Files compare OK
```

### 85. `sort`
- **Category**: Data Processing
- **Function**: Reads input, sorts data alphabetically or numerically, and writes the sorted output to screen or file.
- **Syntax**: `sort [options] [filename]`
- **Sample Output**:
```text
C:\Users\Nextsem> type names.txt | sort
Amit
Bhavna
Chetan
Devika
```

### 86. `mklink`
- **Category**: File & Directory Links
- **Function**: Creates symbolic links, hard links, or directory junctions pointing to files or directories.
- **Syntax**: `mklink [[/D] | [/H] | [/J]] Link Target`
- **Sample Output**:
```text
C:\Users\Nextsem> mklink /D C:\Shortcuts\Logs C:\Users\Nextsem\Logs
symbolic link created for C:\Shortcuts\Logs <<===>> C:\Users\Nextsem\Logs
```

### 87. `subst`
- **Category**: Disk Virtualization
- **Function**: Associates a local path directory with a virtual drive letter.
- **Syntax**: `subst [drive1: [drive2:]path]`
- **Sample Output**:
```text
C:\Users\Nextsem> subst X: C:\Users\Nextsem\Documents\Projects
[Mapped directory to Drive X:]
```

### 88. `takeown`
- **Category**: File Ownership & Permissions
- **Function**: Allows an administrator to take ownership of a file or directory for full access control.
- **Syntax**: `takeown /f filename [/r]`
- **Sample Output**:
```text
C:\Users\Nextsem> takeown /f C:\ProtectedFolder /r /d y
SUCCESS: The file or folder "C:\ProtectedFolder" is now owned by user "NEXTSEM-PC\Nextsem".
```

### 89. `cipher /w`
- **Category**: Disk Security & Sanitization
- **Function**: Wipes and permanently overwrites deleted data on volume free space to prevent file recovery.
- **Syntax**: `cipher /w:directory_path`
- **Sample Output**:
```text
C:\Users\Nextsem> cipher /w:C:\Users\Nextsem\Desktop
Writing 0x00
....................................................................
Writing 0xFF
....................................................................
```

### 90. `expand`
- **Category**: Archive Utilities
- **Function**: Extracts one or more compressed Cabinet (.CAB) archive files.
- **Syntax**: `expand Source Destination`
- **Sample Output**:
```text
C:\Users\Nextsem> expand updates.cab -F:* C:\ExtractedUpdates
Expanding C:\ExtractedUpdates\patch1.dll
2 files expanded.
```

---

## Batch 10: System Utilities & Power Tools (Commands 91–100)

### 91. `eventvwr`
- **Category**: System Monitoring
- **Function**: Launches the Windows Event Viewer MMC snap-in to view Application, System, and Security event logs.
- **Syntax**: `eventvwr`
- **Sample Output**:
```text
C:\Users\Nextsem> eventvwr
[Opens Windows Event Viewer GUI Window]
```

### 92. `perfmon`
- **Category**: System Monitoring
- **Function**: Opens Windows Performance Monitor to analyze real-time system performance counters.
- **Syntax**: `perfmon [/res | /sys | /report]`
- **Sample Output**:
```text
C:\Users\Nextsem> perfmon
[Launches Windows Performance Monitor GUI Console]
```

### 93. `resmon`
- **Category**: System Monitoring
- **Function**: Launches Windows Resource Monitor to inspect real-time CPU, RAM, Disk, and Network usage per process.
- **Syntax**: `resmon`
- **Sample Output**:
```text
C:\Users\Nextsem> resmon
[Launches Resource Monitor GUI window]
```

### 94. `cleanmgr`
- **Category**: Disk Optimization
- **Function**: Launches Disk Cleanup utility to scan and remove temporary system files, cache, and Recycle Bin items.
- **Syntax**: `cleanmgr`
- **Sample Output**:
```text
C:\Users\Nextsem> cleanmgr /autoclean
[Scans and frees temporary cache and system storage]
```

### 95. `control`
- **Category**: System Administration
- **Function**: Opens the classic Windows Control Panel window.
- **Syntax**: `control [panel_applet_name]`
- **Sample Output**:
```text
C:\Users\Nextsem> control
[Launches Control Panel window]
```

### 96. `reg`
- **Category**: Registry Utilities
- **Function**: Console Registry tool for querying, adding, deleting, exporting, and modifying keys/values in the Windows Registry.
- **Syntax**: `reg [query|add|delete|export|import] [key_name]`
- **Sample Output**:
```text
C:\Users\Nextsem> reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer" /v "Logon UI"
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer
    Logon UI    REG_DWORD    0x1
```

### 97. `regedit`
- **Category**: Registry Utilities
- **Function**: Launches the graphical Windows Registry Editor MMC application.
- **Syntax**: `regedit`
- **Sample Output**:
```text
C:\Users\Nextsem> regedit
[Launches Graphical Registry Editor window]
```

### 98. `mstsc`
- **Category**: Remote Access
- **Function**: Launches Remote Desktop Connection client tool to connect to remote Windows machines.
- **Syntax**: `mstsc [/v:server[:port]] [/f]`
- **Sample Output**:
```text
C:\Users\Nextsem> mstsc /v:192.168.1.200 /f
[Launches Remote Desktop Connection UI]
```

### 99. `sigverif`
- **Category**: System Verification
- **Function**: Launches File Signature Verification tool to check digital signature authenticity of system drivers.
- **Syntax**: `sigverif`
- **Sample Output**:
```text
C:\Users\Nextsem> sigverif
[Launches File Signature Verification GUI Window]
```

### 100. `calc`
- **Category**: System Utilities
- **Function**: Launches the built-in Windows Calculator app.
- **Syntax**: `calc`
- **Sample Output**:
```text
C:\Users\Nextsem> calc
[Launches Windows Calculator Application]
```
