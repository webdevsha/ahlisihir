
      function writecopy() {
        var data = document.getElementById("AI_input");
        send = data.value;
        console.log(send);

        var data2 = document.getElementById("AI_instruction");
        productInfo = data2.value;
        console.log(productInfo);
        
        const apiKey = process.env.OPENAI_API_KEY;

        var raw = JSON.stringify({
          "model": "text-davinci-edit-001",
          "input": send,
          "instruction":
            "Create a high-quality Instagram captions, in Malay for the given product name. Focus on solving the problem. Make the tone of the description: joyful and compassionate.  Limited to 60 words only. Start the caption with relatable storytelling",
          "temperature": 0.7,
          "top_p": 1
        });

        var requestOptions = {
          method: "POST",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
          },
          body: raw,
          redirect: "follow",
        };

        fetch("https://api.openai.com/v1/edits", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            document.getElementById("AI_balas").innerHTML;
            var jawapan = JSON.parse(result);
            var jawapan2 = jawapan.choices[0].text;

            document.getElementById("AI_balas").innerHTML = jawapan2;
            // balas.choices[0].text

            // document.getElementById("balas").innerHTML = JSON.parse();
            console.log(result);
          })
          .catch((error) => console.log("error", error));
      }