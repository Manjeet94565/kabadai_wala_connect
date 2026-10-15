# AI service requirements

## Required tools

- Python 3.11 or later
- pip
- A Python virtual environment

## Install

```powershell
cd ai-service
py -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
```

`requirements.txt` is the source of truth and contains FastAPI, Uvicorn, PyTorch, Ultralytics/YOLO, OpenCV, and supporting libraries. Install from that file rather than installing packages individually.

## Important notes

- The API entry file has not been added yet, so this service is not runnable or deployable yet.
- Do not commit `venv/`, datasets, trained `.pt` model files, or secrets.
- Keep model download/storage instructions documented when the AI API is implemented.
