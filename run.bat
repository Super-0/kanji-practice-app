@echo off
setlocal
pushd "%~dp0" || goto :path_error

where py >nul 2>&1
if %errorlevel%==0 (
  start "Kanji Practice App" py -3 -m http.server 8000
  timeout /t 2 >nul
  start "" http://127.0.0.1:8000
  goto :cleanup
)

where python >nul 2>&1
if %errorlevel%==0 (
  start "Kanji Practice App" python -m http.server 8000
  timeout /t 2 >nul
  start "" http://127.0.0.1:8000
  goto :cleanup
)

echo Python was not found. Install Python 3 and try again.
goto :error

:path_error
echo Could not open this folder from a UNC/WSL path.
echo Copy the project to a normal Windows path like C:\Users\Ben\Projects and try again.
goto :error

:error
pause
popd
endlocal
exit /b 1

:cleanup
popd
endlocal
