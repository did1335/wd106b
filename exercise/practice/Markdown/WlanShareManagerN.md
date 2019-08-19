# 無線網路熱點分享程式碼
```bat
@echo off
::預設定的值放這邊！！[打在等號後面]
::分享的SSID
set dssid=Default
::分享的密碼[8位以上]
set dpasswd=12345678

::詢問管理員權限，回答否跳出
color 4E
echo ======================================================
echo Warning!!!
echo #請使用系統管理員權限執行此程式[除非檢查分享狀態]！！
echo #不是所有的無線網卡都適用於基地台分享！
echo  部分無線網卡會發生無法開啟或用戶端斷線...等情況！！
echo ======================================================
choice /M "繼續執行？"
if %errorlevel% equ 1 goto :main
if %errorlevel% equ 2 goto :eof

:main
::主程序
cls
color 1F
echo =================================
echo Windows 7 Wifi Hotspot 設定小程式
echo By Bob Pan 2019.08.19
echo =================================
echo 您要執行甚麼工作？
echo 1] 設定無線基地台並啟用
echo 2] 僅啟用無線基地台虛擬網卡
echo 3] 停用無線基地台
echo 4] 顯示無線基地台狀態
echo 5] 退出程式
echo =================================
choice /C 12345 /M "Choice:"
if %errorlevel% equ 1 goto :enbwa
if %errorlevel% equ 2 goto :enbwo
if %errorlevel% equ 3 goto :diswa
if %errorlevel% equ 4 goto :statw
if %errorlevel% equ 5 goto :eof

:enbwa
::設定無線基地台並啟用
cls
color 6F
echo ==================================================
echo 要代入預設參數嗎？
echo [預設參數請將本批次檔用記事本打開，在文件的最前面]
echo ==================================================
choice /M "Choice:"
set qenbwaret=%errorlevel%
echo.
color 1F
::if陳述式內不宜有太多命令，避免系統誤判讀，故採goto跳到外部執行
if %qenbwaret% equ 1 (
goto :enbwad
) else (
goto :enbwag
)

::選擇Y
:enbwad
echo Processing...
netsh wlan set hostednetwork mode=allow ssid=%dssid% key=%dpasswd%
pause
goto :enbwaf

::選擇N
:enbwag
echo ==================================================
echo 請照指示輸入參數：
echo ==================================================
set /p gssid=網路SSID：
set /p gpasswd=密碼[8位以上]：
echo Processing...
netsh wlan set hostednetwork mode=allow ssid=%gssid% key=%gpasswd%
pause
goto :enbwaf

::共同處
:enbwaf
cls
color 6F
echo ====================================================================
echo Note
echo 請在"控制台\網路和網際網路\網路連線\你連線的網路卡"點右鍵內容\共用
echo 並勾選"允許其他網路使用者透過這台電腦的網際網路連線來連線"
echo 將底下"家用網路連線"選擇"Microsoft Virtual WiFi Miniport Adapter"
echo 取消勾選"允許其他網路使用者來控制或停用網路連線共用"
echo ====================================================================
pause
echo.
color 1F
echo Processing...
netsh wlan start hostednetwork
echo 執行完畢。
pause
goto :main

::僅啟用無線基地台虛擬網卡
:enbwo
cls
echo Processing...
netsh wlan set hostednetwork mode=allow
echo 執行完畢。
pause
goto :main

::停用無線基地台
:diswa
color 6F
cls
choice /M "繼續執行？"
if %errorlevel% equ 1 goto :disway
if %errorlevel% equ 2 goto :main

::選擇Y[N會返回開頭]
:disway
color 1F
echo.
echo Processing...
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=disallow
echo 執行完畢。
pause
goto :main

::顯示無線基地台狀態
:statw
cls
echo Processing...
netsh wlan show hostednetwork
pause
goto :main
```