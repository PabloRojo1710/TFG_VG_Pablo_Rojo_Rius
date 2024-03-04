from __init__ import ini_app

app = ini_app('config.DevConfig')
if __name__ == "__main__":
    app.run(port=5000, debug = True)