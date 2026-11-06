export interface WindowsCommandItem {
  id: number;
  command: string;
  category: string;
  function: string;
  syntax: string;
  output: string;
  batch: number; // 1 to 10
}

export const WINDOWS_COMMANDS_100: WindowsCommandItem[] = [
  // BATCH 1: Commands 1 - 10
  {
    id: 1,
    command: "dir",
    category: "System & Directories",
    function: "Displays a list of files and subdirectories in a directory with file sizes, creation dates, and volume details.",
    syntax: "dir [drive:][path][filename] [/P] [/W] [/A[[:]attributes]] [/O[[:]sortorder]] [/S]",
    output: `C:\\Users\\Nextsem> dir
 Volume in drive C has no label.
 Volume Serial Number is 4A8F-92C1

 Directory of C:\\Users\\Nextsem

08/01/2026  10:15 AM    <DIR>          .
08/01/2026  10:15 AM    <DIR>          ..
08/01/2026  09:30 AM    <DIR>          Documents
08/01/2026  11:42 AM    <DIR>          Downloads
08/01/2026  08:12 AM             1,420 notes.txt
08/01/2026  12:00 PM            12,850 project_report.pdf
               2 File(s)         14,270 bytes
               4 Dir(s)  128,495,210,496 bytes free`,
    batch: 1
  },
  {
    id: 2,
    command: "cd",
    category: "System & Directories",
    function: "Displays the name of or changes the current directory path.",
    syntax: "cd [/D] [drive:][path] or cd ..",
    output: `C:\\Users\\Nextsem> cd Documents\\Projects
C:\\Users\\Nextsem\\Documents\\Projects> cd ..
C:\\Users\\Nextsem\\Documents>`,
    batch: 1
  },
  {
    id: 3,
    command: "ipconfig",
    category: "Network Diagnostics",
    function: "Displays all current TCP/IP network adapter configurations, IPv4/IPv6 addresses, subnet mask, and default gateway.",
    syntax: "ipconfig [/all] [/renew] [/release] [/flushdns]",
    output: `C:\\Users\\Nextsem> ipconfig

Windows IP Configuration

Ethernet adapter Ethernet 1:

   Connection-specific DNS Suffix  . : localdomain
   Link-local IPv6 Address . . . . . : fe80::8c31:9a7f:5501:4b22%12
   IPv4 Address. . . . . . . . . . . : 192.168.1.105
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1`,
    batch: 1
  },
  {
    id: 4,
    command: "systeminfo",
    category: "System Information",
    function: "Fetches detailed operating system properties, hardware configuration, BIOS version, memory statistics, and installed hotfixes.",
    syntax: "systeminfo [/s Computer [/u Domain\\User [/p Password]]] [/fo {TABLE|LIST|CSV}]",
    output: `C:\\Users\\Nextsem> systeminfo

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
Network Card(s):           1 NIC(s) Installed.`,
    batch: 1
  },
  {
    id: 5,
    command: "ping",
    category: "Network Diagnostics",
    function: "Sends ICMP Echo Request packets to test network connectivity and measure round-trip time to a remote target or IP address.",
    syntax: "ping [-t] [-a] [-n count] [-l size] target_name",
    output: `C:\\Users\\Nextsem> ping google.com

Pinging google.com [142.250.190.46] with 32 bytes of data:
Reply from 142.250.190.46: bytes=32 time=14ms TTL=117
Reply from 142.250.190.46: bytes=32 time=12ms TTL=117
Reply from 142.250.190.46: bytes=32 time=15ms TTL=117
Reply from 142.250.190.46: bytes=32 time=13ms TTL=117

Ping statistics for 142.250.190.46:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 12ms, Maximum = 15ms, Average = 13ms`,
    batch: 1
  },
  {
    id: 6,
    command: "tasklist",
    category: "Process & Task Management",
    function: "Displays a list of currently running processes on the local machine including Process IDs (PID), session name, and memory usage.",
    syntax: "tasklist [/s Computer [/u User [/p Password]]] [/m [Module] | /v | /fi Filter]",
    output: `C:\\Users\\Nextsem> tasklist

Image Name                    PID Session Name        Session#    Mem Usage
========================= ======== ================ =========== ============
System Idle Process              0 Services                   0          8 K
System                           4 Services                   0      1,240 K
smss.exe                       412 Services                   0      1,080 K
csrss.exe                      624 Console                    1      4,850 K
explorer.exe                  3412 Console                    1    142,520 K
chrome.exe                    8912 Console                    1    284,110 K
cmd.exe                       9540 Console                    1      5,120 K`,
    batch: 1
  },
  {
    id: 7,
    command: "taskkill",
    category: "Process & Task Management",
    function: "Terminates one or more active tasks or processes specified by Process ID (PID) or process image name.",
    syntax: "taskkill [/s Computer [/u User [/p Password]]] { [/fi Filter] | [/pid ProcessID | /im ImageName] } [/f] [/t]",
    output: `C:\\Users\\Nextsem> taskkill /im notepad.exe /f
SUCCESS: The process "notepad.exe" with PID 7420 has been terminated.`,
    batch: 1
  },
  {
    id: 8,
    command: "cls",
    category: "Console Utilities",
    function: "Clears all text from the Command Prompt window and positions the cursor at the top left corner.",
    syntax: "cls",
    output: `C:\\Users\\Nextsem> cls
[Screen is cleared completely]`,
    batch: 1
  },
  {
    id: 9,
    command: "hostname",
    category: "System Information",
    function: "Prints the computer host name configured in Windows network properties.",
    syntax: "hostname",
    output: `C:\\Users\\Nextsem> hostname
NEXTSEM-WORKSTATION-01`,
    batch: 1
  },
  {
    id: 10,
    command: "ver",
    category: "System Information",
    function: "Displays the exact version number of the Windows Operating System.",
    syntax: "ver",
    output: `C:\\Users\\Nextsem> ver

Microsoft Windows [Version 10.0.22631.3880]`,
    batch: 1
  },

  // BATCH 2: Commands 11 - 20
  {
    id: 11,
    command: "netstat",
    category: "Network Diagnostics",
    function: "Displays active TCP connections, listening ports, network statistics, routing tables, and process connections.",
    syntax: "netstat [-a] [-b] [-e] [-n] [-o] [-p proto] [-r] [-s] [interval]",
    output: `C:\\Users\\Nextsem> netstat -ano

Active Connections

  Proto  Local Address          Foreign Address        State           PID
  TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       1044
  TCP    192.168.1.105:51240    142.250.190.46:443     ESTABLISHED     8912
  TCP    192.168.1.105:51241    13.107.42.16:443       ESTABLISHED     4120
  UDP    0.0.0.0:5353           *:*                                    2156`,
    batch: 2
  },
  {
    id: 12,
    command: "tracert",
    category: "Network Diagnostics",
    function: "Traces the network route packets travel to reach a destination host, listing each router hop along the path.",
    syntax: "tracert [-d] [-h maximum_hops] [-j host-list] [-w timeout] target_name",
    output: `C:\\Users\\Nextsem> tracert 8.8.8.8

Tracing route to dns.google [8.8.8.8]
over a maximum of 30 hops:

  1     2 ms     1 ms     1 ms  192.168.1.1
  2    11 ms    10 ms    10 ms  10.240.0.1
  3    18 ms    15 ms    16 ms  172.16.20.5
  4    19 ms    18 ms    17 ms  dns.google [8.8.8.8]

Trace complete.`,
    batch: 2
  },
  {
    id: 13,
    command: "nslookup",
    category: "Network Diagnostics",
    function: "Queries Domain Name System (DNS) infrastructure to resolve hostnames to IP addresses or inspect DNS records.",
    syntax: "nslookup [hostname] [server]",
    output: `C:\\Users\\Nextsem> nslookup nextsem.com
Server:  UnKnown
Address:  192.168.1.1

Non-authoritative answer:
Name:    nextsem.com
Addresses:  104.21.45.18
            172.67.198.82`,
    batch: 2
  },
  {
    id: 14,
    command: "arp",
    category: "Network Diagnostics",
    function: "Displays and modifies entries in the Address Resolution Protocol (ARP) cache mapping IP addresses to physical MAC addresses.",
    syntax: "arp [-a [inet_addr] [-N if_addr]] [-g [inet_addr] [-N if_addr]] [-d inet_addr [if_addr]] [-s inet_addr eth_addr [if_addr]]",
    output: `C:\\Users\\Nextsem> arp -a

Interface: 192.168.1.105 --- 0xb
  Internet Address      Physical Address      Type
  192.168.1.1           9c-a2-f4-81-00-11     dynamic
  192.168.1.255         ff-ff-ff-ff-ff-ff     static
  224.0.0.22            01-00-5e-00-00-16     static`,
    batch: 2
  },
  {
    id: 15,
    command: "route",
    category: "Network Management",
    function: "Manipulates network routing tables to view, add, modify, or delete static IP routes.",
    syntax: "route [-f] [-p] [command [destination] [MASK netmask] [gateway] [METRIC metric]",
    output: `C:\\Users\\Nextsem> route print
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
===========================================================================`,
    batch: 2
  },
  {
    id: 16,
    command: "getmac",
    category: "Network Diagnostics",
    function: "Returns Media Access Control (MAC) address and network adapter names for local or remote computers.",
    syntax: "getmac [/s computer [/u domain\\user [/p password]]] [/fo {TABLE|LIST|CSV}] [/v]",
    output: `C:\\Users\\Nextsem> getmac

Physical Address    Transport Name
=================== ==========================================================
9C-A2-F4-81-00-11   \\Device\\Tcpip_{8B1D4F10-6C2A-4B6A-9140-57121A0F9514}
N/A                 Network disconnected`,
    batch: 2
  },
  {
    id: 17,
    command: "pathping",
    category: "Network Diagnostics",
    function: "Combines ping and tracert to provide statistics on latency and packet loss at intermediate routers.",
    syntax: "pathping [-g host-list] [-h maximum_hops] [-i address] [-n] [-p period] [-q queries] target_name",
    output: `C:\\Users\\Nextsem> pathping 1.1.1.1

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

Trace complete.`,
    batch: 2
  },
  {
    id: 18,
    command: "netsh",
    category: "Network Administration",
    function: "Launches Network Shell to configure interface IP addresses, Wi-Fi profiles, Windows Defender Firewall rules, and proxy settings.",
    syntax: "netsh [context] [subcontext] [command]",
    output: `C:\\Users\\Nextsem> netsh wlan show interfaces

There is 1 interface on the system:

    Name                   : Wi-Fi
    Description            : Intel(R) Wi-Fi 6 AX201 160MHz
    State                  : connected
    SSID                   : Nextsem_HighSpeed_5G
    Radio type             : 802.11ax
    Signal                 : 98%
    Receive rate (Mbps)    : 866
    Transmit rate (Mbps)   : 866`,
    batch: 2
  },
  {
    id: 19,
    command: "nbtstat",
    category: "Network Diagnostics",
    function: "Displays NetBIOS over TCP/IP (NetBT) protocol statistics, NetBIOS name tables, and NetBIOS name cache.",
    syntax: "nbtstat [-a RemoteName] [-A IP_address] [-c] [-n] [-r] [-R] [-s] [-S]",
    output: `C:\\Users\\Nextsem> nbtstat -n

Local Area Connection:
Node IpAddress: [192.168.1.105] Scope Id: []

                NetBIOS Local Name Table

       Name               Type         Status
    ---------------------------------------------
    NEXTSEM-PC     <00>  UNIQUE      Registered
    WORKGROUP      <00>  GROUP       Registered
    NEXTSEM-PC     <20>  UNIQUE      Registered`,
    batch: 2
  },
  {
    id: 20,
    command: "curl",
    category: "Network Utilities",
    function: "Transfers data to or from a network server using protocols such as HTTP, HTTPS, FTP, and returns header or body data.",
    syntax: "curl [options] [URL...]",
    output: `C:\\Users\\Nextsem> curl -I https://nextsem.in

HTTP/1.1 200 OK
Date: Sat, 01 Aug 2026 06:45:00 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Server: cloudflare
CF-RAY: 8ad251f28b12-BOM`,
    batch: 2
  },

  // BATCH 3: Commands 21 - 30
  {
    id: 21,
    command: "chkdsk",
    category: "Disk & File System",
    function: "Scans hard drive file systems and volume metadata for logical/physical errors and repairs corrupted sectors.",
    syntax: "chkdsk [volume:] [/F] [/R] [/X] [/L[:size]] [/B]",
    output: `C:\\Users\\Nextsem> chkdsk C:
The type of the file system is NTFS.
Volume label is Windows OS.

WARNING! /F parameter not specified.
Running CHKDSK in read-only mode.

Stage 1: Examining basic file system structure...
  524288 file records processed.
  File verification completed.

Stage 2: Examining file name linkage...
  680142 index entries processed.
  Index verification completed.

Windows has scanned the file system and found no problems.
No further action is required.`,
    batch: 3
  },
  {
    id: 22,
    command: "diskpart",
    category: "Disk Administration",
    function: "Launches the interactive Disk Partition command-line interpreter for partition management, formatting, and volume resizing.",
    syntax: "diskpart",
    output: `C:\\Users\\Nextsem> diskpart

Microsoft DiskPart version 10.0.22631.1

DISKPART> list disk

  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          512 GB    1024 KB        *
  Disk 1    Online           64 GB        0 B        *

DISKPART> exit
Leaving DiskPart...`,
    batch: 3
  },
  {
    id: 23,
    command: "sfc",
    category: "System Repair & Maintenance",
    function: "System File Checker: Scans all protected system files and replaces corrupted or missing files with cached copies.",
    syntax: "sfc [/scannow] [/verifyonly] [/scanfile=file] [/verifyfile=file] [/offbootdir=dir /offwindir=dir]",
    output: `C:\\Users\\Nextsem> sfc /scannow

Beginning system scan. This process will take some time.

Beginning verification phase of system scan.
Verification 100% complete.

Windows Resource Protection did not find any integrity violations.`,
    batch: 3
  },
  {
    id: 24,
    command: "format",
    category: "Disk Administration",
    function: "Formats a disk drive partition to accept Windows file systems like NTFS, FAT32, or exFAT.",
    syntax: "format volume [/FS:file-system] [/V:label] [/Q] [/A:size] [/C]",
    output: `C:\\Users\\Nextsem> format E: /FS:NTFS /Q /V:DataBackup
The type of the file system is FAT32.
WARNING, ALL DATA ON NON-REMOVABLE DISK
DRIVE E: WILL BE LOST!
Proceed with Format (Y/N)? y
QuickFormatting 64.0 GB
Creating file system structures.
Format complete.
67,108,864 KB total disk space.
67,104,220 KB available on disk.`,
    batch: 3
  },
  {
    id: 25,
    command: "fsutil",
    category: "File System Utilities",
    function: "Performs advanced NTFS file system tasks including querying free space, managing sparse files, USN journal, and hard links.",
    syntax: "fsutil [volume|file|behavior|repair|dirty] [subcommand]",
    output: `C:\\Users\\Nextsem> fsutil volume diskfree C:
Total # of free bytes        : 128495210496 (119.66 GB)
Total # of bytes             : 512000000000 (476.83 GB)
Total # of avail free bytes  : 128495210496 (119.66 GB)`,
    batch: 3
  },
  {
    id: 26,
    command: "vol",
    category: "Disk & File System",
    function: "Displays the disk volume label and volume serial number of the specified drive.",
    syntax: "vol [drive:]",
    output: `C:\\Users\\Nextsem> vol C:
 Volume in drive C is Windows OS
 Volume Serial Number is 4A8F-92C1`,
    batch: 3
  },
  {
    id: 27,
    command: "label",
    category: "Disk Administration",
    function: "Creates, changes, or deletes the volume label (name) of a disk drive.",
    syntax: "label [drive:][label]",
    output: `C:\\Users\\Nextsem> label D: Nextsem_Storage
[Volume label updated successfully]`,
    batch: 3
  },
  {
    id: 28,
    command: "defrag",
    category: "Disk Maintenance",
    function: "Consolidates fragmented files on local storage drives to optimize disk performance.",
    syntax: "defrag <volumes> [/C] [/E] [/U] [/V] [/O]",
    output: `C:\\Users\\Nextsem> defrag C: /O

Invoking retrim on (C:)...

        Performing pass 1: Retrimming 0%...
        Performing pass 1: Retrimming 100%...

Post Defragmentation Report:

        Volume Information:
                Volume size                 = 476.83 GB
                Free space                  = 119.66 GB
                Total fragmented space      = 0%`,
    batch: 3
  },
  {
    id: 29,
    command: "compact",
    category: "File Compression",
    function: "Displays or alters the NTFS compression state of files and directories on disk.",
    syntax: "compact [/C | /U] [/S[:dir]] [/A] [/I] [/F] [filename...]",
    output: `C:\\Users\\Nextsem> compact /c /s:C:\\Users\\Nextsem\\Logs

 Setting the directory C:\\Users\\Nextsem\\Logs to compress new files [OK]

 Compressing files in C:\\Users\\Nextsem\\Logs\\

app.log          1048576 :    262144 [4.0 to 1 ratio] C
system.log        524288 :    131072 [4.0 to 1 ratio] C

1 files within 1 directories were compressed.
1,572,864 total bytes of data are stored in 393,216 bytes.
The compression ratio is 4.0 to 1.`,
    batch: 3
  },
  {
    id: 30,
    command: "cipher",
    category: "File Security & Encryption",
    function: "Displays or alters the Encryption File System (EFS) state of directories and files on NTFS partitions.",
    syntax: "cipher [/e | /d] [/s:dir] [filename...]",
    output: `C:\\Users\\Nextsem> cipher C:\\Users\\Nextsem\\Confidential

 Listing C:\\Users\\Nextsem\\Confidential\\
 New files added to this directory will not be encrypted.

 U secret_key.pem
 U financial_records.xlsx

Key for code:
 U: Unencrypted
 E: Encrypted`,
    batch: 3
  },

  // BATCH 4: Commands 31 - 40
  {
    id: 31,
    command: "copy",
    category: "File Operations",
    function: "Copies one or more files from a source location to a destination path.",
    syntax: "copy [/V] [/N] [/Y | /-Y] [/Z] [/A | /B] source [+ source [...]] [destination]",
    output: `C:\\Users\\Nextsem> copy report.txt D:\\Backup\\
        1 file(s) copied.`,
    batch: 4
  },
  {
    id: 32,
    command: "xcopy",
    category: "File Operations",
    function: "Copies files, directories, and entire subdirectory trees with permission retention and file filtering options.",
    syntax: "xcopy source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W] [/C] [/I] [/H] [/R] [/Y]",
    output: `C:\\Users\\Nextsem> xcopy C:\\Projects D:\\Backup\\Projects /E /H /I /Y
C:\\Projects\\file1.txt
C:\\Projects\\src\\index.ts
C:\\Projects\\src\\App.tsx
3 File(s) copied`,
    batch: 4
  },
  {
    id: 33,
    command: "robocopy",
    category: "Advanced File Mirroring",
    function: "Robust File Copy tool for mirroring directory structures, resuming interrupted transfers, and preserving timestamps and ACL permissions.",
    syntax: "robocopy <Source> <Destination> [<File>[ ...]] [<Options>]",
    output: `C:\\Users\\Nextsem> robocopy C:\\Data D:\\BackupData /MIR /LOG:copy_log.txt

-------------------------------------------------------------------------------
   ROBOCOPY     ::     Robust File Copy for Windows
-------------------------------------------------------------------------------

  Started : Saturday, August 1, 2026 12:10:00 PM
   Source : C:\\Data\\
     Dest : D:\\BackupData\\

    Files : *.*

               Total    Copied   Skipped  Mismatch    FAILED    Extras
    Dirs :         4         4         0         0         0         0
   Files :        25        25         0         0         0         0
   Bytes :   45.2 MB   45.2 MB         0         0         0         0

Speed :            1845120 Bytes/sec.
Speed :             105.58 MB/min.
Ended : Saturday, August 1, 2026 12:10:01 PM`,
    batch: 4
  },
  {
    id: 34,
    command: "move",
    category: "File Operations",
    function: "Moves files and renames directories from source path to destination.",
    syntax: "move [/Y | /-Y] [drive:][path]filename1[,...] destination",
    output: `C:\\Users\\Nextsem> move draft.docx C:\\Users\\Nextsem\\Documents\\
        1 file(s) moved.`,
    batch: 4
  },
  {
    id: 35,
    command: "del",
    category: "File Operations",
    function: "Deletes one or specified files from hard disk volumes.",
    syntax: "del [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names",
    output: `C:\\Users\\Nextsem> del temp_file.log /q
[File deleted without confirmation prompt]`,
    batch: 4
  },
  {
    id: 36,
    command: "mkdir",
    category: "Directory Operations",
    function: "Creates a new folder or nested directory path structure.",
    syntax: "mkdir [drive:]path or md [drive:]path",
    output: `C:\\Users\\Nextsem> mkdir C:\\Projects\\NCERT_App\\assets
[Directory structure created]`,
    batch: 4
  },
  {
    id: 37,
    command: "rmdir",
    category: "Directory Operations",
    function: "Removes/deletes an existing empty or non-empty directory tree.",
    syntax: "rmdir [/S] [/Q] [drive:]path or rd [/S] [/Q] [drive:]path",
    output: `C:\\Users\\Nextsem> rmdir /s /q C:\\OldCache
[Folder C:\\OldCache and all contents removed]`,
    batch: 4
  },
  {
    id: 38,
    command: "ren",
    category: "File Operations",
    function: "Renames a file or directory without moving it to a different drive/folder.",
    syntax: "ren [drive:][path]filename1 filename2",
    output: `C:\\Users\\Nextsem> ren old_logo.png new_logo.png
[File successfully renamed]`,
    batch: 4
  },
  {
    id: 39,
    command: "tree",
    category: "Directory Operations",
    function: "Graphically displays the folder structure of a drive or specified directory path.",
    syntax: "tree [drive:][path] [/F] [/A]",
    output: `C:\\Users\\Nextsem\\Projects> tree /F
Folder PATH listing for volume Windows OS
Volume serial number is 4A8F-92C1
C:.
├───public
│       favicon.ico
│       robots.txt
└───src
    │   App.tsx
    │   index.css
    │   main.tsx
    └───components
            Navbar.tsx
            Footer.tsx`,
    batch: 4
  },
  {
    id: 40,
    command: "attrib",
    category: "File Attributes",
    function: "Displays or modifies file attributes such as Read-only (R), Hidden (H), System (S), and Archive (A).",
    syntax: "attrib [+R | -R] [+A | -A] [+S | -S] [+H | -H] [drive:][path][filename] [/S [/D]]",
    output: `C:\\Users\\Nextsem> attrib secret.key
A  H  R       C:\\Users\\Nextsem\\secret.key

C:\\Users\\Nextsem> attrib -h -r secret.key
[Attributes updated]`,
    batch: 4
  },

  // BATCH 5: Commands 41 - 50
  {
    id: 41,
    command: "net user",
    category: "User & Group Administration",
    function: "Adds, modifies, deletes, or lists Windows local user accounts.",
    syntax: "net user [username [password | *] [options]] [/DOMAIN]",
    output: `C:\\Users\\Nextsem> net user

User accounts for \\\\NEXTSEM-PC

-------------------------------------------------------------------------------
Administrator            DefaultAccount           Guest
Nextsem                  UtilityAccount
The command completed successfully.`,
    batch: 5
  },
  {
    id: 42,
    command: "net localgroup",
    category: "User & Group Administration",
    function: "Adds, displays, or modifies local security groups and user group memberships.",
    syntax: "net localgroup [groupname [/COMMENT:\"text\"]] [/DOMAIN]",
    output: `C:\\Users\\Nextsem> net localgroup Administrators

Alias name     Administrators
Comment        Administrators have complete and unrestricted access to the computer/domain

Members

-------------------------------------------------------------------------------
Administrator
Nextsem
The command completed successfully.`,
    batch: 5
  },
  {
    id: 43,
    command: "icacls",
    category: "Access Control & Permissions",
    function: "Displays or modifies Discretionary Access Control Lists (DACLs) and permissions on files and folders.",
    syntax: "icacls Name [/grant[:r] User:Permission] [/deny User:Permission] [/remove[:g|:d]]",
    output: `C:\\Users\\Nextsem> icacls C:\\Users\\Nextsem\\Documents

C:\\Users\\Nextsem\\Documents NT AUTHORITY\\SYSTEM:(I)(F)
                            BUILTIN\\Administrators:(I)(F)
                            NEXTSEM-PC\\Nextsem:(I)(F)

Successfully processed 1 files; Failed processing 0 files`,
    batch: 5
  },
  {
    id: 44,
    command: "whoami",
    category: "Security & User Context",
    function: "Displays current logged-on user account name, active user SID, and active group memberships.",
    syntax: "whoami [/upn | /fqdn | /user | /groups | /priv | /all]",
    output: `C:\\Users\\Nextsem> whoami /user

USER INFORMATION
----------------

User Name          SID
================== ==============================================
NEXTSEM-PC\\Nextsem S-1-5-21-397955417-626881126-188441444-1001`,
    batch: 5
  },
  {
    id: 45,
    command: "runas",
    category: "Security & Privileges",
    function: "Executes specific tools or commands under different user account credentials.",
    syntax: "runas [/profile | /noprofile] [/user:UserAccountName] program",
    output: `C:\\Users\\Nextsem> runas /user:Administrator cmd.exe
Enter the password for Administrator:
Attempting to start cmd.exe as user "NEXTSEM-PC\\Administrator" ...`,
    batch: 5
  },
  {
    id: 46,
    command: "gpupdate",
    category: "Group Policy",
    function: "Forces an immediate update and refresh of local and Active Directory Group Policy settings.",
    syntax: "gpupdate [/target:{computer|user}] [/force] [/wait:value] [/logoff] [/boot]",
    output: `C:\\Users\\Nextsem> gpupdate /force
Updating policy...

Computer Policy update has completed successfully.
User Policy update has completed successfully.`,
    batch: 5
  },
  {
    id: 47,
    command: "gpresult",
    category: "Group Policy",
    function: "Displays Group Policy settings and Resultant Set of Policy (RSoP) report for a targeted user or machine.",
    syntax: "gpresult [/s Computer [/u Domain\\User [/p Password]]] [/user TargetUserName] [/r|/v|/z]",
    output: `C:\\Users\\Nextsem> gpresult /r

RSOP results for NEXTSEM-PC\\Nextsem on NEXTSEM-PC : Logging Mode

COMPUTER SETTINGS
------------------
    Applied Group Policy Objects
    ----------------------------
        Local Group Policy

USER SETTINGS
--------------
    Applied Group Policy Objects
    ----------------------------
        Local Group Policy`,
    batch: 5
  },
  {
    id: 48,
    command: "secpol.msc",
    category: "Security Console",
    function: "Launches the Local Security Policy MMC management snap-in for password rules, audit policies, and user rights assignment.",
    syntax: "secpol.msc",
    output: `C:\\Users\\Nextsem> secpol.msc
[Launches Local Security Policy GUI Console window]`,
    batch: 5
  },
  {
    id: 49,
    command: "lusrmgr.msc",
    category: "User & Group Console",
    function: "Launches the Graphical Local Users and Groups MMC console to manage user profiles, accounts, and groups.",
    syntax: "lusrmgr.msc",
    output: `C:\\Users\\Nextsem> lusrmgr.msc
[Launches Local Users and Groups MMC Snap-in window]`,
    batch: 5
  },
  {
    id: 50,
    command: "quser",
    category: "Session Management",
    function: "Displays active user logon session information on the local system or remote computer.",
    syntax: "quser [username | sessionname | sessionid] [/server:servername]",
    output: `C:\\Users\\Nextsem> quser
 USERNAME              SESSIONNAME        ID  STATE   IDLE TIME  LOGON TIME
>Nextsem               console             1  Active      none   08/01/2026 08:30`,
    batch: 5
  },

  // BATCH 6: Commands 51 - 60
  {
    id: 51,
    command: "sc",
    category: "Service Management",
    function: "Service Controller tool used for communicating with the Service Control Manager to create, query, start, stop, or edit background services.",
    syntax: "sc [server] [command] [service_name] <option1> <option2>...",
    output: `C:\\Users\\Nextsem> sc query wuauserv

SERVICE_NAME: wuauserv
        TYPE               : 20  WIN32_SHARE_PROCESS
        STATE              : 4  RUNNING
                                (STOPPABLE, NOT_PAUSABLE, ACCEPTS_SHUTDOWN)
        WIN32_EXIT_CODE    : 0  (0x0)
        SERVICE_EXIT_CODE  : 0  (0x0)
        CHECKPOINT         : 0x0
        WAIT_HINT          : 0x0`,
    batch: 6
  },
  {
    id: 52,
    command: "net start",
    category: "Service Management",
    function: "Displays a list of running services or starts a specified Windows background service.",
    syntax: "net start [service]",
    output: `C:\\Users\\Nextsem> net start
These Windows services are started:

   Background Intelligent Transfer Service
   CoreMessagingRegistrar
   Cryptographic Services
   DHCP Client
   DNS Client
   Windows Update

The command completed successfully.`,
    batch: 6
  },
  {
    id: 53,
    command: "net stop",
    category: "Service Management",
    function: "Stops a specified currently active background Windows service.",
    syntax: "net stop service_name",
    output: `C:\\Users\\Nextsem> net stop wuauserv
The Windows Update service is stopping.
The Windows Update service was stopped successfully.`,
    batch: 6
  },
  {
    id: 54,
    command: "driverquery",
    category: "Driver Management",
    function: "Displays a list of installed device drivers, driver types, link dates, and operating statuses.",
    syntax: "driverquery [/s Computer [/u Domain\\User [/p Password]]] [/fo {TABLE|LIST|CSV}] [/v] [/si]",
    output: `C:\\Users\\Nextsem> driverquery

Module Name  Display Name           Driver Type   Link Date
============ ====================== ============= ======================
ACPI         ACPI Driver            Kernel        05/12/2025 04:12:00 AM
afd          Ancillary Function Dri Kernel        06/18/2025 02:30:15 PM
nvlddmkm     NVIDIA Windows Kernel  Kernel        07/10/2026 11:20:00 AM
rtwlane      Realtek Wireless LAN   Kernel        03/04/2025 09:15:30 AM`,
    batch: 6
  },
  {
    id: 55,
    command: "wmic",
    category: "System Management",
    function: "Windows Management Instrumentation Command-line: queries system hardware, CPU, BIOS, and OS information.",
    syntax: "wmic [alias] [where condition] [get property list]",
    output: `C:\\Users\\Nextsem> wmic cpu get name, numberOfCores, maxClockSpeed
MaxClockSpeed  Name                                       NumberOfCores
2400           13th Gen Intel(R) Core(TM) i7-13700H      14`,
    batch: 6
  },
  {
    id: 56,
    command: "powercfg",
    category: "Power & Battery Management",
    function: "Configures Windows power plan settings, controls sleep states, and generates detailed battery health reports.",
    syntax: "powercfg [/list | /batteryreport | /energy | /hibernate {on|off}]",
    output: `C:\\Users\\Nextsem> powercfg /batteryreport
Battery life report saved to file path C:\\Users\\Nextsem\\battery-report.html.`,
    batch: 6
  },
  {
    id: 57,
    command: "dxdiag",
    category: "Hardware Diagnostics",
    function: "Launches the DirectX Diagnostic Tool window containing detailed hardware, GPU, audio, and driver diagnostic logs.",
    syntax: "dxdiag [/dontddraw] [/whql:on|off] [/t filename] [/x outputfile]",
    output: `C:\\Users\\Nextsem> dxdiag
[Launches DirectX Diagnostic GUI Tool]`,
    batch: 6
  },
  {
    id: 58,
    command: "msconfig",
    category: "System Troubleshooting",
    function: "Opens System Configuration utility to control Windows boot options, startup applications, and services configuration.",
    syntax: "msconfig",
    output: `C:\\Users\\Nextsem> msconfig
[Opens System Configuration GUI window]`,
    batch: 6
  },
  {
    id: 59,
    command: "taskmgr",
    category: "Task Management",
    function: "Launches Windows Task Manager to monitor CPU, RAM, disk usage, active apps, and startup entries.",
    syntax: "taskmgr",
    output: `C:\\Users\\Nextsem> taskmgr
[Launches Windows Task Manager window]`,
    batch: 6
  },
  {
    id: 60,
    command: "shutdown",
    category: "System Power Control",
    function: "Schedules or initiates immediate local or remote system shutdown, restart, logoff, or abort timer.",
    syntax: "shutdown [/s | /r | /g | /a | /h | /l] [/f] [/m \\\\computer] [/t xxx] [/c \"comment\"]",
    output: `C:\\Users\\Nextsem> shutdown /r /t 60 /c "Restarting for system maintenance"
Windows will shut down in 1 minute.
Comment: Restarting for system maintenance`,
    batch: 6
  },

  // BATCH 7: Commands 61 - 70
  {
    id: 61,
    command: "dism",
    category: "System Repair & Maintenance",
    function: "Deployment Image Servicing and Management: inspects, services, and repairs corrupted Windows System Image components.",
    syntax: "dism /Online /Cleanup-Image [/CheckHealth | /ScanHealth | /RestoreHealth]",
    output: `C:\\Users\\Nextsem> dism /Online /Cleanup-Image /RestoreHealth

Deployment Image Servicing and Management tool
Version: 10.0.22631.1

Image Version: 10.0.22631.3880

[==========================100.0%==========================]
The restore operation completed successfully.
The operation completed successfully.`,
    batch: 7
  },
  {
    id: 62,
    command: "winget",
    category: "Package Manager",
    function: "Official Windows Package Manager: enables discovering, installing, upgrading, and uninstalling applications from CLI.",
    syntax: "winget [install | upgrade | uninstall | search | list] <package_id>",
    output: `C:\\Users\\Nextsem> winget search Git.Git
Name ID         Version Source
-------------------------------
Git  Git.Git    2.45.2  winget

C:\\Users\\Nextsem> winget install Git.Git
Found Git [Git.Git] Version 2.45.2
Downloading https://github.com/git-for-windows/...
Successfully installed`,
    batch: 7
  },
  {
    id: 63,
    command: "bcdedit",
    category: "Boot Configuration",
    function: "Boot Configuration Data Store Editor: views and configures Windows bootloader settings, safe mode, and startup options.",
    syntax: "bcdedit [/enum] [/set {identifier} option value]",
    output: `C:\\Users\\Nextsem> bcdedit

Windows Boot Manager
--------------------
identifier              {bootmgr}
device                  partition=\\Device\\HarddiskVolume1
description             Windows Boot Manager
default                 {current}
resumeobject            {8b1d4f10-6c2a-11ee-b001-806e6f6e6963}
displayorder            {current}

Windows Boot Loader
-------------------
identifier              {current}
device                  partition=C:
path                    \\WINDOWS\\system32\\winload.efi
description             Windows 11`,
    batch: 7
  },
  {
    id: 64,
    command: "bootrec",
    category: "Boot Repair",
    function: "Troubleshoots and repairs Master Boot Record (MBR), boot sector, and BCD configuration (in Windows Recovery Environment).",
    syntax: "bootrec [/fixmbr | /fixboot | /rebuildbcd | /scanos]",
    output: `X:\\Sources> bootrec /fixmbr
The operation completed successfully.

X:\\Sources> bootrec /rebuildbcd
Scanning all disks for Windows installations.
Total identified Windows installations: 1
[1]  C:\\Windows
Add installation to boot list? Yes(Y)/No(N)/All(A): y
The operation completed successfully.`,
    batch: 7
  },
  {
    id: 65,
    command: "vssadmin",
    category: "Backup & Recovery",
    function: "Volume Shadow Copy Service administration tool: lists shadow copies, storage writers, and creates restore points.",
    syntax: "vssadmin list {shadows | writers | provider} [/for=volume]",
    output: `C:\\Users\\Nextsem> vssadmin list shadows
vssadmin 1.1 - Volume Shadow Copy Service administrative command-line tool

Contents of shadow copy set ID: {4b8a21d0-1a22-4210-9110-09281a8b4109}
   Contained 1 shadow copies at creation time: 08/01/2026 07:00:00 AM
      Shadow Copy ID: {91a0b12a-3312-4f10-8902-1209381a1001}
      Original Volume: (C:)\\\\?\\Volume{51a82910-0000-0000-0000-100000000000}\\`,
    batch: 7
  },
  {
    id: 66,
    command: "wbadmin",
    category: "Backup & Recovery",
    function: "Windows Backup command-line tool to back up and restore operating system, volumes, files, and system state.",
    syntax: "wbadmin start backup -backupTarget:<Target> -include:<Items>",
    output: `C:\\Users\\Nextsem> wbadmin get versions
wbadmin 1.0 - Backup command-line tool

Backup time: 07/28/2026 11:00 PM
Backup target: Fixed Disk labeled BackupDrive (D:)
Version identifier: 07/28/2026-17:30
Can recover: Volume(s), File(s), Application(s), Bare Metal Recovery`,
    batch: 7
  },
  {
    id: 67,
    command: "lodctr",
    category: "Performance Counters",
    function: "Updates and repairs Performance Counter registry entries and counter name strings.",
    syntax: "lodctr [/R | /Q | filename]",
    output: `C:\\Users\\Nextsem> lodctr /q

Performance Counter Status:
    [PerfOS] Service counters OK
    [PerfDisk] Service counters OK
    [PerfNet] Service counters OK`,
    batch: 7
  },
  {
    id: 68,
    command: "type",
    category: "File Inspection",
    function: "Displays the raw text contents of a specified file directly in standard output without modifying it.",
    syntax: "type [drive:][path]filename",
    output: `C:\\Users\\Nextsem> type config.env
PORT=3000
NODE_ENV=production
APP_TITLE=StudyGuide by Nextsem`,
    batch: 7
  },
  {
    id: 69,
    command: "find",
    category: "Text Search",
    function: "Searches for a specific text string in a file or set of files.",
    syntax: "find [/V] [/C] [/N] [/I] [/OFF[LINE]] \"string\" [[drive:][path]filename[ ...]]",
    output: `C:\\Users\\Nextsem> find /I /N "Nextsem" README.md

---------- README.MD
[1]# StudyGuide by Nextsem
[14]Empowering students with Nextsem interactive digital learning resources.`,
    batch: 7
  },
  {
    id: 70,
    command: "findstr",
    category: "Advanced Text Search",
    function: "Advanced pattern search tool supporting regular expressions, literal strings, and recursive directory searches.",
    syntax: "findstr [/B] [/E] [/L] [/R] [/S] [/I] [/X] [/V] [/N] [/M] [/O] [/P] [/OFF[LINE]] strings [drive:][path]filename",
    output: `C:\\Users\\Nextsem> findstr /s /i "react" src\\*.tsx
src\\App.tsx:import { useState, useEffect } from 'react';
src\\components\\Navbar.tsx:import React from 'react';`,
    batch: 7
  },

  // BATCH 8: Commands 71 - 80
  {
    id: 71,
    command: "set",
    category: "Environment Variables",
    function: "Displays, sets, or removes environment variables in the current Command Prompt session.",
    syntax: "set [variable=[string]]",
    output: `C:\\Users\\Nextsem> set NODE_ENV=development
C:\\Users\\Nextsem> set NODE_ENV
NODE_ENV=development`,
    batch: 8
  },
  {
    id: 72,
    command: "setx",
    category: "Environment Variables",
    function: "Sets environment variables permanently in the user or system registry environment environment.",
    syntax: "setx [/s computer [/u domain\\user [/p password]]] variable value [/m]",
    output: `C:\\Users\\Nextsem> setx JAVA_HOME "C:\\Program Files\\Java\\jdk-21"

SUCCESS: Specified value was saved.`,
    batch: 8
  },
  {
    id: 73,
    command: "path",
    category: "Environment Variables",
    function: "Displays or sets the search path for executable binaries and system commands.",
    syntax: "path [[drive:]path[;...]]",
    output: `C:\\Users\\Nextsem> path
PATH=C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\nodejs\\;C:\\Users\\Nextsem\\AppData\\Local\\Programs\\Python`,
    batch: 8
  },
  {
    id: 74,
    command: "echo",
    category: "Console Utilities",
    function: "Prints text messages onto the console screen or turns command echoing on/off in batch scripts.",
    syntax: "echo [ON | OFF] [message]",
    output: `C:\\Users\\Nextsem> echo Welcome to Nextsem Windows Commands Guide!
Welcome to Nextsem Windows Commands Guide!`,
    batch: 8
  },
  {
    id: 75,
    command: "title",
    category: "Console Customization",
    function: "Sets the title bar text displayed at the top of the Command Prompt console window.",
    syntax: "title [string]",
    output: `C:\\Users\\Nextsem> title Nextsem Terminal Console
[Command Prompt window title updates to "Nextsem Terminal Console"]`,
    batch: 8
  },
  {
    id: 76,
    command: "color",
    category: "Console Customization",
    function: "Sets background and foreground colors of the Command Prompt window using hexadecimal color attributes.",
    syntax: "color [attr] (e.g., color 0A for Green text on Black background)",
    output: `C:\\Users\\Nextsem> color 0A
[Console text changes to bright green on black background]`,
    batch: 8
  },
  {
    id: 77,
    command: "prompt",
    category: "Console Customization",
    function: "Customizes the command prompt string (e.g., displaying current path, date, time, or custom characters).",
    syntax: "prompt [text] (e.g., prompt $P$G or prompt $D $T $G)",
    output: `C:\\Users\\Nextsem> prompt NextsemCmd$G
NextsemCmd> `,
    batch: 8
  },
  {
    id: 78,
    command: "clip",
    category: "Console Utilities",
    function: "Redirects the output of any command line tool into the Windows Clipboard.",
    syntax: "command | clip",
    output: `C:\\Users\\Nextsem> ipconfig | clip
[IP Configuration details copied to clipboard. Press Ctrl+V to paste anywhere.]`,
    batch: 8
  },
  {
    id: 79,
    command: "more",
    category: "File & Console Utilities",
    function: "Displays long output or file text one screenful at a time with paging controls.",
    syntax: "more [/E [/C] [/P] [/S] [/Tn] [+n]] < [drive:][path]filename or command | more",
    output: `C:\\Users\\Nextsem> type large_log.txt | more
08/01/2026 09:00:01 [INFO] System initialized.
08/01/2026 09:00:02 [INFO] Connected to database.
08/01/2026 09:00:05 [WARN] Memory consumption at 65%.
-- More (10%) --`,
    batch: 8
  },
  {
    id: 80,
    command: "where",
    category: "File Search",
    function: "Locates and displays the exact path of files matching a search pattern within the system PATH environment.",
    syntax: "where [/r dir] [/q] [/f] [/t] pattern",
    output: `C:\\Users\\Nextsem> where node
C:\\Program Files\\nodejs\\node.exe

C:\\Users\\Nextsem> where git
C:\\Program Files\\Git\\cmd\\git.exe`,
    batch: 8
  },

  // BATCH 9: Commands 81 - 90
  {
    id: 91,
    command: "assoc",
    category: "File Extension Associations",
    function: "Displays or modifies file extension associations with file types.",
    syntax: "assoc [.ext[=[fileType]]]",
    output: `C:\\Users\\Nextsem> assoc .txt
.txt=txtfile

C:\\Users\\Nextsem> assoc .pdf
.pdf=AcroExch.Document.DC`,
    batch: 9
  },
  {
    id: 82,
    command: "ftype",
    category: "File Extension Associations",
    function: "Displays or modifies file types used in file extension associations to determine which app launches a file.",
    syntax: "ftype [fileType[=[openCommandString]]]",
    output: `C:\\Users\\Nextsem> ftype txtfile
txtfile="%SystemRoot%\\system32\\NOTEPAD.EXE" "%1"`,
    batch: 9
  },
  {
    id: 83,
    command: "fc",
    category: "File Utilities",
    function: "File Compare: compares two files or sets of files and highlights exact text or binary differences.",
    syntax: "fc [/A] [/B] [/C] [/L] [/LBn] [/N] [/OFF[LINE]] [/T] [/U] [/W] [/nnnn] [drive1:][path1]filename1 [drive2:][path2]filename2",
    output: `C:\\Users\\Nextsem> fc file1.txt file2.txt
Comparing files file1.txt and FILE2.TXT
***** file1.txt
Welcome to Nextsem NCERT
Version 1.0
***** FILE2.TXT
Welcome to Nextsem NCERT
Version 2.0
*****`,
    batch: 9
  },
  {
    id: 84,
    command: "comp",
    category: "File Utilities",
    function: "Compares the contents of two files or sets of files on a byte-by-byte basis.",
    syntax: "comp [data1] [data2] [/D] [/A] [/L] [/N=number] [/C]",
    output: `C:\\Users\\Nextsem> comp doc1.txt doc2.txt
Comparing doc1.txt and doc2.txt...
Files compare OK`,
    batch: 9
  },
  {
    id: 85,
    command: "sort",
    category: "Data Processing",
    function: "Reads input, sorts data alphabetically or numerically, and writes the sorted output to screen or file.",
    syntax: "sort [/R] [/+N] [/M kilobytes] [/L locale] [/REC record_maximum] [[drive1:][path1]filename1] [/O [drive2:][path2]filename2]",
    output: `C:\\Users\\Nextsem> type names.txt | sort
Amit
Bhavna
Chetan
Devika
Zoya`,
    batch: 9
  },
  {
    id: 86,
    command: "mklink",
    category: "File & Directory Links",
    function: "Creates symbolic links, hard links, or directory junctions pointing to files or directories.",
    syntax: "mklink [[/D] | [/H] | [/J]] Link Target",
    output: `C:\\Users\\Nextsem> mklink /D C:\\Shortcuts\\Logs C:\\Users\\Nextsem\\Logs
symbolic link created for C:\\Shortcuts\\Logs <<===>> C:\\Users\\Nextsem\\Logs`,
    batch: 9
  },
  {
    id: 87,
    command: "subst",
    category: "Disk Virtualization",
    function: "Associates a local path directory with a virtual drive letter.",
    syntax: "subst [drive1: [drive2:]path] or subst drive1: /D",
    output: `C:\\Users\\Nextsem> subst X: C:\\Users\\Nextsem\\Documents\\Projects
C:\\Users\\Nextsem> dir X:
[Displays contents of C:\\Users\\Nextsem\\Documents\\Projects under Drive X:]`,
    batch: 9
  },
  {
    id: 88,
    command: "takeown",
    category: "File Ownership & Permissions",
    function: "Allows an administrator to take ownership of a file or directory for full access control.",
    syntax: "takeown [/s computer [/u domain\\user [/p password]]] /f filename [/a] [/r [/d y|n]]",
    output: `C:\\Users\\Nextsem> takeown /f C:\\ProtectedFolder /r /d y

SUCCESS: The file or folder "C:\\ProtectedFolder" is now owned by user "NEXTSEM-PC\\Nextsem".`,
    batch: 9
  },
  {
    id: 89,
    command: "cipher /w",
    category: "Disk Security & Sanitization",
    function: "Wipes and permanently overwrites deleted data on volume free space to prevent file recovery.",
    syntax: "cipher /w:directory_path",
    output: `C:\\Users\\Nextsem> cipher /w:C:\\Users\\Nextsem\\Desktop

To remove as much data as possible, please close all other applications.
Writing 0x00
....................................................................
Writing 0xFF
....................................................................
Writing Random Numbers
....................................................................`,
    batch: 9
  },
  {
    id: 90,
    command: "expand",
    category: "Archive Utilities",
    function: "Extracts one or more compressed Cabinet (.CAB) archive files.",
    syntax: "expand [-r] Source Destination or expand -d Source.cab",
    output: `C:\\Users\\Nextsem> expand updates.cab -F:* C:\\ExtractedUpdates
Microsoft (R) File Expansion Utility
Copyright (c) Microsoft Corporation. All rights reserved.

Adding updates.cab to Extraction Queue
Expanding C:\\ExtractedUpdates\\patch1.dll
Expanding C:\\ExtractedUpdates\\patch2.dll
2 files expanded.`,
    batch: 9
  },

  // BATCH 10: Commands 91 - 100
  {
    id: 91,
    command: "eventvwr",
    category: "System Monitoring",
    function: "Launches the Windows Event Viewer MMC snap-in to view Application, System, and Security event logs.",
    syntax: "eventvwr",
    output: `C:\\Users\\Nextsem> eventvwr
[Opens Windows Event Viewer GUI Window]`,
    batch: 10
  },
  {
    id: 92,
    command: "perfmon",
    category: "System Monitoring",
    function: "Opens Windows Performance Monitor to analyze real-time system performance counters.",
    syntax: "perfmon [/res | /sys | /report]",
    output: `C:\\Users\\Nextsem> perfmon
[Launches Windows Performance Monitor GUI Console]`,
    batch: 10
  },
  {
    id: 93,
    command: "resmon",
    category: "System Monitoring",
    function: "Launches Windows Resource Monitor to inspect real-time CPU, RAM, Disk, and Network usage per process.",
    syntax: "resmon",
    output: `C:\\Users\\Nextsem> resmon
[Launches Resource Monitor GUI window]`,
    batch: 10
  },
  {
    id: 94,
    command: "cleanmgr",
    category: "Disk Optimization",
    function: "Launches Disk Cleanup utility to scan and remove temporary system files, cache, and Recycle Bin items.",
    syntax: "cleanmgr [/sagerun:n | /sageset:n | /LOWDISK | /VERYLOWDISK]",
    output: `C:\\Users\\Nextsem> cleanmgr /autoclean
[Scans and frees temporary cache and system storage]`,
    batch: 10
  },
  {
    id: 95,
    command: "control",
    category: "System Administration",
    function: "Opens the classic Windows Control Panel window.",
    syntax: "control [panel_applet_name]",
    output: `C:\\Users\\Nextsem> control
[Launches Control Panel window]`,
    batch: 10
  },
  {
    id: 96,
    command: "reg",
    category: "Registry Utilities",
    function: "Console Registry tool for querying, adding, deleting, exporting, and modifying keys/values in the Windows Registry.",
    syntax: "reg [query|add|delete|copy|save|restore|load|unload|compare|export|import|flags] [key_name] [options]",
    output: `C:\\Users\\Nextsem> reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer" /v "Logon UI"

HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer
    Logon UI    REG_DWORD    0x1`,
    batch: 10
  },
  {
    id: 97,
    command: "regedit",
    category: "Registry Utilities",
    function: "Launches the graphical Windows Registry Editor MMC application.",
    syntax: "regedit [/s filename]",
    output: `C:\\Users\\Nextsem> regedit
[Launches Graphical Registry Editor window]`,
    batch: 10
  },
  {
    id: 98,
    command: "mstsc",
    category: "Remote Access",
    function: "Launches Remote Desktop Connection client tool to connect to remote Windows machines.",
    syntax: "mstsc [/v:server[:port]] [/admin] [/f] [/w:width /h:height] [/public] [/span]",
    output: `C:\\Users\\Nextsem> mstsc /v:192.168.1.200 /f
[Launches Remote Desktop Connection UI]`,
    batch: 10
  },
  {
    id: 99,
    command: "sigverif",
    category: "System Verification",
    function: "Launches File Signature Verification tool to check digital signature authenticity of system drivers.",
    syntax: "sigverif",
    output: `C:\\Users\\Nextsem> sigverif
[Launches File Signature Verification GUI Window]`,
    batch: 10
  },
  {
    id: 100,
    command: "calc",
    category: "System Utilities",
    function: "Launches the built-in Windows Calculator app.",
    syntax: "calc",
    output: `C:\\Users\\Nextsem> calc
[Launches Windows Calculator Application]`,
    batch: 10
  }
];
