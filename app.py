from flask import Flask, render_template
import matplotlib.pyplot as plt
from datetime import datetime
import io
import base64

app = Flask(__name__)

@app.route('/')
def home():
    img = io.BytesIO()  # Create byte buffer to save image
    dates = [
    datetime(2023, 10, 22), datetime(2023, 10, 29), datetime(2023, 11, 6),
    datetime(2023, 10, 27), datetime(2023, 11, 26), datetime(2023, 10, 19),
    datetime(2023, 10, 23), datetime(2023, 11, 4), datetime(2023, 11, 6),
    datetime(2023, 10, 30), datetime(2023, 11, 3), datetime(2023, 11, 8)
    ]
    weights = [8, 7.5, 7.81, 7.88, 8.75, 8.31, 6.75, 8.13, 8.31, 7.69, 6.56, 6.56]

    plt.scatter(dates, weights, color='c', edgecolor='b')
    plt.title('Bragging Rights: Guess the Date & Weight')
    plt.xlabel('Date')
    plt.ylabel('Weight (in lbs)')
    plt.grid(True)
    plt.savefig(img, format='png')  # Save plot to buffer
    plt.close()
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode()
    return render_template('index.html', plot_url=plot_url)

if __name__ == '__main__':
    app.run(debug=True)
