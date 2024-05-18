
with open('opcodes.txt', 'r') as f:
    data = f.readlines()
    d = 0
    while d < len(data):
        dec = data[d].rstrip()
        d+=1
        hex = data[d].rstrip()
        d+=1
        mne = data[d].rstrip()
        d+=1
        desc = data[d].rstrip()
        d+=1
        typ = data[d].rstrip()
        d+=1
        sze = data[d].rstrip()
        d+=1
        ina = data[d].rstrip()
        d+=1
        flgn = data[d].rstrip()
        d+=1
        flgc = data[d].rstrip()
        d+=1
        flgz = data[d].rstrip()
        d+=1
        cyc = data[d].rstrip()
        d+=1

        print(f"case \"{mne}\":")
        print(f"    val=\"DEC:    {dec}\\r\\nHEX:    {hex}\\r\\nMne:    {mne}\\r\\n        {desc}\\r\\nType:   {typ}\\r\\nSize:   {sze}\\r\\nChange: {ina}\\r\\nFlags:  N C Z\\r\\n        {flgn} {flgc} {flgz}\\r\\nCycles: {cyc}\";")
        print(f"    break;")
